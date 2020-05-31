-- Deploy goremotedev:users_rename_field_verified to pg

BEGIN;

ALTER TABLE users RENAME COLUMN verfieid_at TO verified_at;

COMMIT;
