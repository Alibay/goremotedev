-- Deploy goremotedev:initdb to pg

BEGIN;

CREATE TABLE users
(
    id BIGSERIAL CONSTRAINT users_pk PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	role INT DEFAULT 0 NOT NULL,
    status INT DEFAULT 0 NOT NULL,
    verification_code VARCHAR(255),
    verified BOOLEAN NOT NULL DEFAULT false,
    blocked BOOLEAN NOT NULL DEFAULT false,
    deleted BOOLEAN NOT NULL DEFAULT false,
    settings JSONB NOT NULL DEFAULT '{}',
    registered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP,
    verfieid_at TIMESTAMP
);

CREATE UNIQUE index users_email_uindex ON users (email);

CREATE TABLE contacts
(
    user_id BIGINT NOT NULL CONSTRAINT contacts_user_id_fk REFERENCES users,
    type INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    privacy INT NOT NULL
);

CREATE TABLE skills
(
    id BIGSERIAL CONSTRAINT skills_pk PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE users_skills
(
    user_id BIGINT NOT NULL CONSTRAINT users_skills_user_id_fk REFERENCES users,
    skill_id BIGINT NOT NULL CONSTRAINT users_skills_skill_id_fk REFERENCES skills,
    level INT NOT NULL DEFAULT 0,
    PRIMARY KEY(user_id, skill_id)
);

CREATE TABLE companies
(
    id BIGSERIAL CONSTRAINT companies_pk PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    registered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies_users
(
    company_id BIGINT NOT NULL CONSTRAINT companies_users_company_id_fk REFERENCES companies,
    user_id BIGINT NOT NULL CONSTRAINT companies_users_user_id_fk REFERENCES users,
    PRIMARY KEY(company_id, user_id)
);

CREATE TABLE currencies
(
    id SERIAL CONSTRAINT currencies_pk PRIMARY KEY,
    sign VARCHAR(2),
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE jobs
(
    id BIGSERIAL CONSTRAINT jobs_pk PRIMARY KEY,
    company_id BIGINT NOT NULL CONSTRAINT jobs_company_id_fk REFERENCES companies,
    archived BOOLEAN NOT NULL DEFAULT false,
    part_time BOOLEAN NOT NULL DEFAULT false,
    title VARCHAR(255) NOT NULL,
    published BOOLEAN DEFAULT false,
    office BOOLEAN DEFAULT false,
    relocation BOOLEAN DEFAULT false,
    compencation_from INT NOT NULL DEFAULT 0,
    compencation_to INT NOT NULL DEFAULT 0,
    currency_id BIGINT NOT NULL CONSTRAINT jobs_currency_id_fk REFERENCES currencies
);

CREATE TABLE jobs_skills
(
    job_id BIGINT NOT NULL CONSTRAINT jobs_skills_job_id_fk REFERENCES jobs,
    skill_id BIGINT NOT NULL CONSTRAINT jobs_skills_skill_id_fk REFERENCES skills,
    optional BOOLEAN DEFAULT false,
    level INT NOT NULL DEFAULT 0,
    PRIMARY KEY(job_id, skill_id)
);

CREATE TABLE jobs_applications
(
    job_id BIGINT NOT NULL CONSTRAINT jobs_applications_job_id_fk REFERENCES jobs,
    user_id BIGINT NOT NULL CONSTRAINT jobs_applications_user_id_fk REFERENCES users,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP,
    read BOOLEAN DEFAULT false,
    registered_status INT NOT NULL DEFAULT 0,
    registered_text TEXT,
    body TEXT,
    PRIMARY KEY(job_id, user_id)
);

CREATE TABLE languages
(
    id SERIAL CONSTRAINT languages_pk PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE jobs_languages
(
    job_id BIGINT NOT NULL CONSTRAINT jobs_languages_job_id_fk REFERENCES jobs,
    language_id BIGINT NOT NULL CONSTRAINT jobs_languages_language_id_fk REFERENCES languages,
    optional BOOLEAN DEFAULT false,
    level INT NOT NULL DEFAULT 0,
    PRIMARY KEY(job_id, language_id)
);

CREATE TABLE users_languages
(
    user_id BIGINT NOT NULL CONSTRAINT users_languages_user_id_fk REFERENCES users,
    language_id BIGINT NOT NULL CONSTRAINT users_languages_skill_id_fk REFERENCES languages,
    level INT NOT NULL DEFAULT 0,
    PRIMARY KEY(user_id, language_id)
);

COMMIT;
