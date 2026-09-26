# RLS Attack Lab kit

> Week 7 kit. You put a practice table in a deliberately unsafe state, see what the public key can do, then lock it down with row-level security (RLS).
> Full step-by-step instructions are in [../lab.md](../lab.md#part-1--rls-attack-lab-45-min).

> [!WARNING]
> Use this kit **only on a Supabase practice project you created yourself**, with the fake data in `setup.sql`. Never run `setup.sql` in a project that holds real data, and never test someone else's project.

## What's in the kit

| File | What it does |
|---|---|
| `setup.sql` | Creates a `guestbook` table with fake rows, **turns RLS off** and grants the public `anon` role full access. This is the "Lovable/Moltbook" state. Running it again resets the table. |
| `fix.sql` | Turns RLS on and adds two policies: anyone may read public messages; anyone may add a public message of sensible length. Nobody using the public key may change or delete rows. |

## Words you need

- **Supabase:** a hosted Postgres database plus an automatic web API, so a browser can talk to the database directly.
- **Publishable key** (older name: **anon key**): the key your front end uses. It is **public by design**. Anyone who opens your site can read it. It is safe **only** when row-level security is on.
- **Secret key** (older name: **service_role key**): skips every access rule. It belongs only on a server, never in a browser, a repo or a chat.
- **Row-level security (RLS):** a switch on each table. When it is on, the database refuses every request from the public key unless a **policy** allows it.
- **Policy:** one rule in plain words, for example "anyone may read rows where `is_public` is true".

See [../../../resources/glossary.md](../../../resources/glossary.md) for more.

## How to use it

1. Create a new, empty Supabase project (free plan; see [TOOLS.md](../../../TOOLS.md)).
2. Open **SQL Editor**, paste all of `setup.sql` and run it. Supabase may ask you to confirm because the file contains `drop table`, and may warn that RLS is disabled. Confirm: this is your practice project.
3. Look at the warnings Supabase shows you. **Database → Advisors → Security** lists an error called "RLS Disabled in Public", which says anyone with your project URL can read, edit and delete all data in the table. The Table Editor may also label the table as unrestricted. That warning is the lesson.
4. Check what the public role can do. Open `attack.html` (see [../lab.md](../lab.md#part-1--rls-attack-lab-45-min)), paste your Project URL and publishable key, and run Read / Insert / Update / Delete. There is also an optional SQL way (run as the `anon` role inside a transaction that is rolled back) in the lab.
5. Run `fix.sql`. Its last query prints the table's RLS status and its policies.
6. Run the same checks again and compare. Record your before/after table in the lab.

> [!NOTE]
> Menus move. If you can't find **SQL Editor** or **Advisors**, ask your assistant "Where is the SQL Editor in the Supabase dashboard?" or search the Supabase docs.

## What you should see

| Action as the public `anon` role | Before `fix.sql` | After `fix.sql` |
|---|---|---|
| Read all rows | All 6 rows, **including the 2 private notes** | Only the 4 public rows |
| Add a normal public message | Allowed | Allowed |
| Add a private message, or a 1,000-character message | Allowed | Refused: "new row violates row-level security policy" |
| Change someone else's message | Allowed | 0 rows changed, **no error** |
| Delete a message | Allowed | 0 rows deleted, **no error** |

The last two rows surprise most people. When RLS blocks an update or delete, the rows are simply invisible to you, so nothing matches and nothing happens. Always check "how many rows changed", not just "was there an error".

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

Your job: write four policies (read, add, change, delete) so that a signed-in user can only touch rows where `auth.uid() = user_id`. The Supabase guide [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) has examples. Your instructor has a model answer.

## Cleaning up

The free plan allows only a small number of active projects ([TOOLS.md](../../../TOOLS.md)). When you finish, either delete the lab project, or reuse it for your capstone after running `drop table public.guestbook;`.
