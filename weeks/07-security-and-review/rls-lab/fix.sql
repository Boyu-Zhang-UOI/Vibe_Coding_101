-- ============================================================================
-- RLS Attack Lab: fix.sql  (Vibe Coding 101, week 7)
-- ============================================================================
-- Run this in the Supabase SQL Editor AFTER you have attacked the table
-- created by setup.sql. It turns on row-level security (RLS) and adds
-- policies that say, in plain words:
--
--   1. Anyone may READ public messages. Private notes stay hidden.
--   2. Anyone may ADD a public message, if the name is 1-40 characters
--      and the message is 1-280 characters.
--   3. Nobody using the publishable key may CHANGE or DELETE any message.
--      (There is no update or delete policy. With RLS on, "no policy" means "no".)
--
-- You (the owner) can still edit everything in the Supabase dashboard, because
-- the dashboard does not use the publishable key.
-- ============================================================================

-- 1. Turn on row-level security. From now on, every request made with the
--    publishable key is denied unless a policy below allows it.
alter table public.guestbook enable row level security;

-- 2. READ: anyone (signed in or not) may see rows where is_public is true.
drop policy if exists "Anyone can read public messages" on public.guestbook;
create policy "Anyone can read public messages"
  on public.guestbook
  for select
  to anon, authenticated
  using ( is_public = true );

-- 3. ADD: anyone may insert a row, but only a public one with sensible lengths.
--    "with check" tests the NEW row. If the test fails, the insert is refused.
drop policy if exists "Anyone can sign with limits" on public.guestbook;
create policy "Anyone can sign with limits"
  on public.guestbook
  for insert
  to anon, authenticated
  with check (
    is_public = true
    and char_length(name) between 1 and 40
    and char_length(message) between 1 and 280
  );

-- 4. CHANGE / DELETE: deliberately no policies. Nobody using the publishable
--    key can update or delete rows. Their requests will "succeed" with 0 rows.

-- 5. Check your work: this lists the table's RLS status and its policies.
select
  c.relname            as table_name,
  c.relrowsecurity     as rls_enabled,
  p.policyname,
  p.cmd                as operation,
  p.roles,
  p.qual               as using_rule,
  p.with_check         as with_check_rule
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
left join pg_policies p on p.schemaname = n.nspname and p.tablename = c.relname
where n.nspname = 'public' and c.relname = 'guestbook'
order by p.policyname;
