# Pre-launch checklist

Durable home for small pre-launch items that aren't big enough for
their own plan folder but shouldn't be lost in chat or migration
comments.

## Supabase dashboard

- [ ] **Enable HIBP leaked-password protection.** Supabase dashboard →
  project `wrbrgzkbqcyhhjqepqiv` → Authentication → Policies →
  Password Security → toggle on. Verify via security advisor that
  `auth_leaked_password_protection` is gone. Carried over from the
  retired 2026-04-13 database-foundation plan (Task 10) — every
  other task in that plan shipped in code.
