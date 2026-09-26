#!/usr/bin/env bash
# Publishes each starter kit as its own public GitHub *template* repository,
# so students can click "Use this template" instead of copying folders.
#
# Usage:   scripts/publish-starters.sh <github-user-or-org> [prefix]
# Example: scripts/publish-starters.sh my-university vc101
#
# Requires the GitHub CLI (gh), signed in with permission to create repos for the owner.
# Safe to re-run: kits whose repository already exists are skipped.
set -euo pipefail

owner="${1:?Usage: scripts/publish-starters.sh <github-user-or-org> [prefix]}"
prefix="${2:-vc101}"
root="$(cd "$(dirname "$0")/.." && pwd)"

# path-in-this-repo  repo-suffix  description
kits=(
  "weeks/04-read-debug-own-it/debug-clinic|debug-clinic|Vibe Coding 101 week 4: Debug Clinic (contains planted bugs on purpose)"
  "weeks/05-apis-secrets-servers/starter|micro-app-starter|Vibe Coding 101 week 5: AI micro-app starter"
  "weeks/06-agents/be-the-agent|be-the-agent|Vibe Coding 101 week 6: Be the Agent kit (contains a planted bug on purpose)"
  "weeks/07-security-and-review/rls-lab|rls-lab|Vibe Coding 101 week 7: RLS Attack Lab"
  "weeks/07-security-and-review/injection-demo|injection-demo|Vibe Coding 101 week 7: harmless prompt-injection demo"
  "projects/capstone-starter|capstone-starter|Vibe Coding 101 capstone starter"
)

for entry in "${kits[@]}"; do
  IFS="|" read -r path suffix description <<<"$entry"
  repo="$owner/$prefix-$suffix"
  if gh repo view "$repo" >/dev/null 2>&1; then
    echo "Skipping $repo (already exists)"
    continue
  fi
  if [ ! -d "$root/$path" ]; then
    echo "Skipping $path (folder not found)"
    continue
  fi
  tmp="$(mktemp -d)"
  cp -R "$root/$path/." "$tmp/"
  (
    cd "$tmp"
    git init -q -b main
    git add -A
    git commit -q -m "Starter kit from Vibe Coding 101 ($path)"
    gh repo create "$repo" --public --description "$description" --source . --push
    gh repo edit "$repo" --template
  )
  rm -rf "$tmp"
  echo "Published https://github.com/$repo (template)"
done

echo
echo "Done. Share the template links with students, e.g.:"
echo "  https://github.com/$owner/$prefix-capstone-starter/generate"
