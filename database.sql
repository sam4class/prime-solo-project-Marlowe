
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "lakes" (
  "id" serial primary key,
  "name" varchar(255) not null 
); 

CREATE TABLE "water_data" (
  "id" serial primary key,
  "water_quality_status" varchar (255),
  "e_coli_reading" INT not null,
  "temperature" INT not null,
  "microcystin_reading" INT not null,
  "lake_id_wd" INT,
  "or_water_quality_status" varchar (255)
); 

CREATE TABLE "user" (
  "id" serial primary key,
  "favorite_1_lake_id" INT,
  "favorite_2_lake_id" INT,
  "favorite_3_lake_id" INT,
  "access_level" INT,
  "username" varchar (255),
  "password" varchar (255)
); 

CREATE TABLE "notes" (
  "id" serial primary key,
  "lake_id_fk" INT not null,
  "user_id" INT not null,
  "note" varchar (255),
  "picture" varchar (255),
  "date" date default CURRENT_DATE
); 