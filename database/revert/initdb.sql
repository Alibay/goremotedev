-- Revert goremotedev:initdb from pg

BEGIN;

DROP TABLE users_languages;
DROP TABLE jobs_languages;
DROP TABLE languages;
DROP TABLE jobs_applications;
DROP TABLE jobs_skills;
DROP TABLE jobs;
DROP TABLE currencies;
DROP TABLE companies_users;
DROP TABLE companies;
DROP TABLE users_skills;
DROP TABLE skills;
DROP TABLE contacts;
DROP TABLE users;

COMMIT;
