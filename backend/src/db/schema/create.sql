DROP TABLE IF EXISTS activity CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS category_user CASCADE;
DROP TABLE IF EXISTS user_activity CASCADE;


CREATE TABLE category (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  workout VARCHAR(255) NOT NULL
);

CREATE TABLE activity (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES category(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);


CREATE TABLE category_user (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES category(id) ON DELETE CASCADE,
   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_activity (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  activity_id INTEGER REFERENCES activity(id) ON DELETE CASCADE,
  date timestamp NOT NULL
);