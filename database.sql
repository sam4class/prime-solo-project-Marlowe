
--database name: "lakes_app_data"

CREATE TABLE "lakes" (
  "id" serial primary key,
  "name" varchar(255) not null, 
); 

CREATE TABLE "water_data" (
  "id" serial primary key,
  "water_quality_status" varchar (255),
  "e_coli_reading" INT not null,
  "temperature" INT not null,
  "microcystin_reading" INT not null,
  "lake_id_wd" INT
); 

CREATE TABLE "user" (
  "id" serial primary key,
  "onboarded" boolean default false,
  "access_level" INT,
  "username" varchar (255),
  "password" varchar (255)
); 

CREATE TABLE "fav_lakes" (
	"id" serial primary key,
	"user_id" INT REFERENCES "user",
	"lakes_id" INT REFERENCES "lakes"
	);
	 

CREATE TABLE "notes" (
  "id" serial primary key,
  "lake_id_fk" INT not null,
  "user_id" INT not null,
  "note" varchar (255),
  "picture" varchar (255),
  "date" varchar (255)
); 

CREATE TABLE "lakes_to_beach" (
	"id" serial primary key,
	"lake_name" varchar (200),
	"lake_beach_name" varchar (200),
	"acres" varchar (200)
	);


--this currently needs to be hardcoded into database because the water is not currently being tested to be available

INSERT INTO "lakes" 
	("name") 
VALUES 
	('Theodore Wirth Park Beach'),
	('Bde Maka Ska - 32nd Street Beach'),
	('Bde Maka Ska - Thomas Beach'),
	('Bde Maka Ska - North Beach'),
	('Lake Hiawatha Beach'),
	('Lake Nokomis - 50th Street Beach'),
	('Lake Nokomis - Main Beach'),
	('Lake Harriet - North'),
	('Lake Harrirt - South'),
	('Cedar Lake - East Beach'),
	('Cedar Lake - Point Beach'),
	('Cedar Lake - South Beach');
	
INSERT INTO "water_data" 
	("water_quality_status", "e_coli_reading", "temperature", "microcystin_reading", "lake_id_wd") 
VALUES 
	('FAIR', '3', '68', '5', '1'),
	('FAIR', '2', '70', '7', '2'),
	('BAD', '5', '72', '9', '3'),
	('GOOD', '1', '66', '2', '4'),
	('BAD', '4', '76', '10', '5'),
	('GOOD', '0', '70', '4', '6'),
	('BAD', '5', '71', '8', '7'),
	('GOOD', '1', '69', '2', '8'),
	('GOOD', '0', '68', '2', '9'),
	('GOOD', '0', '67', '3', '10'),
	('GOOD', '1', '66', '3', '11'),
	('GOOD', '1', '68', '4', '12');

INSERT INTO "lakes_to_beach" 
	("lake_name", "lake_beach_name") 
VALUES 
	('Theodore Wirth Park', 'Theodore Wirth Park Beach'),
	('Bde Maka Ska', 'Bde Maka Ska - 32nd Street Beach'),
	('Bde Maka Ska', 'Bde Maka Ska - Thomas Beach'),
	('Bde Maka Ska', 'Bde Maka Ska - North Beach'),
	('Lake Hiawatha', 'Lake Hiawatha Beach'),
	('Lake Nokomis', 'Lake Nokomis - 50th Street Beach'),
	('Lake Nokomis', 'Lake Nokomis - Main Beach'),
	('Lake Harriet', 'Lake Harriet - North'),
	('Lake Harriet', 'Lake Harrirt - South'),
	('Cedar Lake', 'Cedar Lake - East Beach'),
	('Cedar Lake', 'Cedar Lake - Point Beach'),
	('Cedar Lake', 'Cedar Lake - South Beach');
