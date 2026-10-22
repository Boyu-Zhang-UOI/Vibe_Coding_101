#!/usr/bin/env bash
# Publishes each starter kit as its own public GitHub *template* repository, so students can
# click "Use this template" instead of copying folders. The kits are listed in scripts/kits.json.
#
# Usage:
#   scripts/publish-starters.sh [options] <github-user-or-org> [prefix]
#
#   (no option)    Create the template repositories that don't exist yet. Existing ones are skipped.
#   --update       Push the current version of each kit to its EXISTING template repository, as a
#                  new commit. The repository then matches the kit exactly: files that exist only in
#                  the template repository are removed. Repositories that students already created
#                  from a template are not touched; they keep the version they started from.
#   --only NAME    Only this kit, by repository suffix (for example --only capstone-starter).
#   --ref COMMIT   Publish the kit as it is in this commit (default: HEAD).
#   --dry-run      Prepare everything and show what would happen, but create and push nothing.
#
# Examples:
#   scripts/publish-starters.sh my-university vc101
#   scripts/publish-starters.sh --update --dry-run my-university
#
# Only COMMITTED content is published (with `git archive`), never your working folder, so local
# files such as .env, .DS_Store or an unfinished edit can't leak into a template.
#
# Requires git, Node.js (to read kits.json) and, unless PUBLISH_GIT_BASE is set, the GitHub CLI
# (gh), signed in with permission to create repositories for the owner. Run `gh auth setup-git`
# once so git can push with your gh sign-in.
#
# Testing without GitHub: set PUBLISH_GIT_BASE to a local folder. Repositories are then created
# there as bare git repositories (<folder>/<owner>/<prefix>-<name>.git), and gh is never called.
set -euo pipefail

usage() { sed -n '2,29p' "$0" | sed 's/^# \{0,1\}//'; }

mode=create
dry=0
only=""
ref=HEAD
while [ $# -gt 0 ]; do
  case "$1" in
    --update) mode=update ;;
    --dry-run) dry=1 ;;
    --only) only="${2:?--only needs a kit name}"; shift ;;
    --ref) ref="${2:?--ref needs a commit}"; shift ;;
    -h|--help) usage; exit 0 ;;
    -*) echo "Unknown option: $1 (see --help)" >&2; exit 2 ;;
    *) break ;;
  esac
  shift
done

owner="${1:-}"
if [ -z "$owner" ]; then usage >&2; exit 2; fi
prefix="${2:-vc101}"
root="$(cd "$(dirname "$0")/.." && pwd)"
base="${PUBLISH_GIT_BASE:-}"

commit="$(git -C "$root" rev-parse --verify --quiet "$ref^{commit}")" || { echo "Not a commit: $ref" >&2; exit 2; }
short="$(git -C "$root" rev-parse --short "$commit")"

repo_url() {
  if [ -n "$base" ]; then echo "$base/$1.git"; else echo "https://github.com/$1.git"; fi
}
repo_exists() {
  if [ -n "$base" ]; then [ -d "$base/$1.git" ]; else gh repo view "$1" >/dev/null 2>&1; fi
}
# Copy the kit's files, as committed, into a folder.
export_kit() {
  mkdir -p "$2"
  git -C "$root" archive --format=tar "$commit:$1" | tar -x -C "$2"
}

matched=0
while IFS=$'\t' read -r path suffix description; do
  [ -n "$only" ] && [ "$only" != "$suffix" ] && continue
  matched=$((matched + 1))
  repo="$owner/$prefix-$suffix"
  if ! git -C "$root" cat-file -e "$commit:$path" 2>/dev/null; then
    echo "Skipping $path (not in commit $short; commit it first)"
    continue
  fi
  if [ -n "$(git -C "$root" status --porcelain -- "$path")" ]; then
    echo "Note: $path has uncommitted changes. They are NOT published; only commit $short is."
  fi

  tmp="$(mktemp -d)"
  if [ "$mode" = create ]; then
    if repo_exists "$repo"; then
      echo "Skipping $repo (already exists; use --update to push a new version)"
      rm -rf "$tmp"
      continue
    fi
    export_kit "$path" "$tmp/kit"
    (
      cd "$tmp/kit"
      git init -q -b main
      git add -A
      git commit -q -m "Starter kit from Vibe Coding 101 ($path @ $short)"
      if [ "$dry" = 1 ]; then
        echo "Would create $repo (template) with $(git ls-files | wc -l | tr -d ' ') files:"
        git ls-files | sed 's/^/    /'
      elif [ -n "$base" ]; then
        git init -q --bare "$base/$repo.git"
        git push -q "$base/$repo.git" main
        echo "Created $base/$repo.git"
      else
        gh repo create "$repo" --public --description "$description" --source . --push
        gh repo edit "$repo" --template
        echo "Published https://github.com/$repo (template)"
      fi
    )
  else
    if ! repo_exists "$repo"; then
      echo "Skipping $repo (doesn't exist yet; run without --update to create it)"
      rm -rf "$tmp"
      continue
    fi
    if [ -n "$base" ]; then git clone -q "$(repo_url "$repo")" "$tmp/repo"; else gh repo clone "$repo" "$tmp/repo" -- -q; fi
    # Make the repository match the kit exactly: remove everything except git's own folder.
    find "$tmp/repo" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
    export_kit "$path" "$tmp/repo"
    (
      cd "$tmp/repo"
      git add -A
      if git diff --cached --quiet; then
        echo "$repo is already up to date with $path @ $short"
      else
        git commit -q -m "Update from Vibe Coding 101 ($path @ $short)"
        if [ "$dry" = 1 ]; then
          echo "Would push this update to $repo:"
          git show --stat --format='    %s' HEAD | sed 's/^/  /'
        else
          git push -q origin HEAD
          echo "Updated $repo"
        fi
      fi
    )
  fi
  rm -rf "$tmp"
done < <(node -e '
  const kits = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")).kits;
  for (const k of kits) console.log([k.path, k.repo, k.description].join("\t"));
' "$root/scripts/kits.json")

if [ -n "$only" ] && [ "$matched" = 0 ]; then
  echo "There is no kit called \"$only\". Names are the \"repo\" values in scripts/kits.json." >&2
  exit 1
fi
if [ "$mode" = create ] && [ "$dry" = 0 ] && [ -z "$base" ]; then
  echo
  echo "Done. Share the template links with students, e.g.:"
  echo "  https://github.com/$owner/$prefix-capstone-starter/generate"
fi
