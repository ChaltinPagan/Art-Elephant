DROP DATABASE IF EXISTS elephant;
CREATE DATABASE elephant;

\c elephant;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
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

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  url TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Chaltin', 'Pagan', 'chaltinpagan@gmail.com', 'chaltin');

INSERT INTO artists (user_id, medium, statement, address)
VALUES (1, 'painting', 'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', '245 Broome St, New York, NY');

INSERT INTO images (user_id, url)
VALUES (1, 'https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e97acf5e231ddf3c2b500/1495396362283/PaganChaltin_Scissors%282012%29_EggTemperaOnPanel_20x15in%28high-res%29.jpg?format=300w');

INSERT INTO images (user_id, url)
VALUES (1, 'https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fe1cd0f68ce8dccc195/1495396422242/PaganChaltin_RedDress%282012%29_eggTemperaOnPanel_24x15in%28high-res%29.jpg?format=300w');

INSERT INTO images (user_id, url)
VALUES (1, 'https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fedcd0f68ce8dccc1c6/1495396448242/PaganChaltin_GreenAndBlue%282012%29_EggTemperaOnPanel_20x20in%28high-res%29.jpg?format=300w');