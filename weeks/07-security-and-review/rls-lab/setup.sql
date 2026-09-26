-- ============================================================================
-- RLS Attack Lab: setup.sql  (Vibe Coding 101, week 7)
-- ============================================================================
-- Run this in the SQL Editor of a NEW, EMPTY practice project in Supabase.
--
-- It creates a table called "guestbook" in a DELIBERATELY VULNERABLE state:
--   * row-level security (RLS) is OFF, and
--   * the "anon" role (anyone who has your publishable key) is allowed to
--     read, insert, update and delete every row.
--
-- That is the same mistake behind the Lovable and Moltbook data leaks.
-- Supabase will warn you about it (for example "RLS Disabled in Public").
-- That warning is the point of the lab: read it, then fix it with fix.sql.
--
-- NEVER run this in a project that holds real data. All rows below are fake.
-- Running this file again resets the table to the vulnerable starting state.
-- ============================================================================

-- 1. Start clean (this deletes any earlier guestbook table in this project).
drop table if exists public.guestbook;

-- 2. The table. A guestbook where visitors leave messages for the site owner.
--    Messages with is_public = false are private notes meant only for the owner.
create table public.guestbook (
  id         bigint generated always as identity primary key,
  name       text        not null,
  message    text        not null,
  is_public  boolean     not null default true,
  created_at timestamptz not null default now()
);

-- 3. Fake rows (555-01xx numbers are reserved for fiction).
insert into public.guestbook (name, message, is_public) values
  ('Ada',    'Lovely site! Signed from the library.',                            true),
  ('Grace',  'Your game made me laugh. Keep going!',                             true),
  ('Alan',   'Found you through the class Project Fair.',                        true),
  ('Katherine', 'The dark mode looks great on my phone.',                        true),
  ('Linus',  'PRIVATE note to the owner: my (fake) phone number is 555-0100.',   false),
  ('Margaret', 'PRIVATE: please do not publish this. My (fake) email is margaret@example.com.', false);

-- 4. Make the vulnerable state explicit, whatever this project's defaults are.
--    (Tables made in the Table Editor get RLS on by default. Tables made with
--    SQL do not, and newer projects no longer grant table access automatically,
--    so we switch RLS off and grant access on purpose.)
alter table public.guestbook disable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on table public.guestbook to anon, authenticated;

-- 5. Show what we made.
select id, name, is_public, left(message, 40) as message_start
from public.guestbook
order by id;
