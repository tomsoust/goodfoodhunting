CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY, 
  title TEXT,
  image_url TEXT,
  user_id INTEGER NOT NULL
  );

ALTER TABLE dishes ADD COLUMN user_id INTEGER;

INSERT INTO dishes (title, image_url) VALUES ('cake', 'https://www.birthdaycakeshop.com.au/wp-content/uploads/2021/10/cake-b-470x459.jpg');

INSERT INTO dishes (title, image_url) VALUES ('pasta', 'https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg');

INSERT INTO dishes (title, image_url) VALUES ('cake', 'https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg');


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  password_digest TEXT
);

INSERT INTO users (email) VALUES ('dt@ga.co');


-- 