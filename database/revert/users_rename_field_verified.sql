-- Revert goremotedev:users_rename_field_verified from pg

BEGIN;

ALTER TABLE users RENAME COLUMN verified_at TO verfieid_at;

COMMIT;
