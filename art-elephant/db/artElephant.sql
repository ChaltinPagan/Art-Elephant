DROP DATABASE IF EXISTS artelephant;
CREATE DATABASE artelephant;

\c artelephant;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  UNIQUE (email)
);

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  medium VARCHAR,
  statement TEXT,
  address TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, email, password)
VALUES ('Chaltin Pagan', 'chaltinpagan@gmail.com', 'chaltin');

INSERT INTO artists (user_id, medium, statement, address)
VALUES (1, 'painting', 'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', '245 Broome St, NY, NY');