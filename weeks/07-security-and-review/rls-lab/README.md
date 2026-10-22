# RLS Attack Lab kit

> Week 7 kit. You put a practice table in a deliberately unsafe state, see what the public key can do, then lock it down with row-level security (RLS).
> Step-by-step instructions are in the [week 7 lab](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/weeks/07-security-and-review/lab.html) (Studio A, Part 1).

> [!WARNING]
> Use this kit **only on a Supabase practice project you created yourself**, with the fake data in `setup.sql`. Never run `setup.sql` in a project that holds real data, and never test someone else's project.

## What's in the kit

| File | What it does |
|---|---|
| `setup.sql` | Creates a `guestbook` table with fake rows, **turns RLS off** and grants the public `anon` role full access. This is the state behind the Lovable and Moltbook leaks, and behind the 16,326 Supabase databases with publicly readable tables that [UpGuard reported](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps) in September 2026. Running it again resets the table. |
| `fix.sql` | Turns RLS on and adds two policies: anyone may read public messages; anyone may add a public message of sensible length. Nobody using the public key may change or delete rows. |
| `attack.html` | The tester page: it uses only the publishable key, like a stranger would. You don't need to run it yourself: the same page is hosted at **<https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html>**. |

## Words you need

- **Supabase:** a hosted Postgres database plus an automatic web API, so a browser can talk to the database directly.
- **Publishable key** (`sb_publishable_…`): the key your front end uses. It is **public by design**: anyone who opens your site can read it. It is safe **only** when row-level security is on. Older projects also have a **legacy anon key** (a long string starting `eyJ`); Supabase is retiring the legacy keys by the end of 2026, so use the publishable key.
- **Secret key** (`sb_secret_…`; the legacy version is the **service_role** key): skips every access rule. It belongs only on a server, never in a browser, a repo or a chat.
- **Grant:** permission for a role, such as `anon` (anyone with the publishable key), to use a table at all. From 30 October 2026, Supabase gives new tables no grants until you add them.
- **Row-level security (RLS):** a switch on each table. When it is on, the database refuses every request from the public key unless a **policy** allows it.
- **Policy:** one rule in plain words, for example "anyone may read rows where `is_public` is true".

The course [glossary](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/resources/glossary.html) has more.

## How to use it

1. Create a new, empty Supabase project (free plan; see the course [tool handout](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/TOOLS.md)).
2. Open **SQL Editor**, paste all of `setup.sql` and run it. Supabase may ask you to confirm because the file contains `drop table`, and may warn that RLS is disabled. Confirm: this is your practice project.
3. Look at the warnings Supabase shows you. **Database → Advisors → Security** lists an error called "RLS Disabled in Public", which says anyone with your project URL can read, edit and delete all data in the table. The Table Editor may also label the table as unrestricted. That warning is the lesson.
4. Check what the public key can do. Open the [RLS attack page](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html), paste your Project URL and publishable key, and run Read / Insert / Update / Delete.
5. Run `fix.sql`. Its last query prints the table's RLS status and its policies.
6. Run the same checks again and compare. Record your before/after table in the lab.

> [!NOTE]
> Menus move. If you can't find **SQL Editor** or **Advisors**, ask your assistant "Where is the SQL Editor in the Supabase dashboard?" or search the Supabase docs.

## What you should see

| Action with the publishable key | Before `fix.sql` | After `fix.sql` |
|---|---|---|
| Read all rows | All 6 rows, **including the 2 private notes** | Only the 4 public rows |
| Add a normal public message | Allowed | Allowed |
| Add a private message, or a 1,000-character message | Allowed | Refused: "new row violates row-level security policy" |
| Change someone else's message | Allowed | 0 rows changed, **no error** |
| Delete a message | Allowed | 0 rows deleted, **no error** |

The last two rows surprise most people. When RLS blocks an update or delete, the rows are simply invisible to you, so nothing matches and nothing happens. Always check "how many rows changed", not just "was there an error". The attack page shows the count for you.

**"Blocked" comes in three kinds**, and the attack page names each one:

- **0 rows (filtered):** RLS hid the rows, so nothing was read or changed.
- **Refused by RLS:** a policy's `with check` rule rejected a new or changed row.
- **Refused: no grant** ("permission denied"): the role may not use the table for that action at all. You'll see this on your own tables if you forget a grant. The fix is a grant **plus** RLS **plus** a policy, together, never a grant on its own.

Anything labeled **ERROR** (wrong URL, key, table or column name, or a paused project) is not a security result: fix the setup and try again.

## Stretch: per-user private notes

Supabase Auth can give each visitor a user ID. Run this in the SQL Editor to make a table where each row belongs to one user:

```sql
drop table if exists public.private_notes;

create table public.private_notes (
  id         bigint generated always as identity primary key,
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  note       text not null check (char_length(note) between 1 and 500),
  created_at timestamptz not null default now()
);

alter table public.private_notes enable row level security;
grant select, insert, update, delete on table public.private_notes to authenticated;
```

Notice the grant goes only to `authenticated` (signed-in users), not to `anon`. Your job: write four policies (read, add, change, delete) so that a signed-in user can only touch rows where `(select auth.uid()) = user_id`. The Supabase guide [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) has examples. Your instructor has a model answer.

## Cleaning up

The free plan allows only a small number of active projects (see the [tool handout](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/TOOLS.md)). When you finish, either delete the lab project, or reuse it for your capstone after running `drop table public.guestbook;`.

## Running the page yourself (offline fallback)

If the hosted page is unreachable, open `attack.html` from this kit instead: double-click it on your own computer, or in a Codespace run `python3 -m http.server 8000` in this folder and open `attack.html` on the forwarded port. It needs an internet connection to load the Supabase library and to reach your project.
