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
  medium TEXT ARRAY,
  statement TEXT,
  address TEXT,
  images TEXT ARRAY,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- CREATE TABLE images (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   url TEXT,
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- );

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Chaltin', 'Pagan', 'chaltinpagan@gmail.com', 'password');

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Floriana', 'McFarland', 'FlorianaM@gmail.com', 'password');

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Suresha', 'Antonov', 'sureshaantonov@gmail.com', 'password');

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Renata', 'Daalmans', 'rdaalmans@gmail.com', 'password');

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Zivko', 'Prohaszka', 'prozivko@gmail.com', 'password');

INSERT INTO artists (user_id, medium, statement, address, images)
VALUES (
  1, 
  ARRAY['Painting'], 
  'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', 
  '245 Broome St, New York, NY',
  ARRAY['https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e97acf5e231ddf3c2b500/1495396362283/PaganChaltin_Scissors%282012%29_EggTemperaOnPanel_20x15in%28high-res%29.jpg?format=300w','https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fe1cd0f68ce8dccc195/1495396422242/PaganChaltin_RedDress%282012%29_eggTemperaOnPanel_24x15in%28high-res%29.jpg?format=300w', 'https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fedcd0f68ce8dccc1c6/1495396448242/PaganChaltin_GreenAndBlue%282012%29_EggTemperaOnPanel_20x20in%28high-res%29.jpg?format=300w']);

INSERT INTO artists (user_id, medium, statement, address, images)
VALUES (
  2, 
  ARRAY['Painting', 'Drawing'], 
  'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', 
  'Long Island City, NY',
  ARRAY['https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg?auto=compress&cs=tinysrgb&h=750&w=1260']);

INSERT INTO artists (user_id, medium, statement, address, images)
VALUES (
  3, 
  ARRAY['Sculpture'], 
  'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', 
  'Bushwick, NY',
  ARRAY['https://images.pexels.com/photos/918776/pexels-photo-918776.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']);

INSERT INTO artists (user_id, medium, statement, address, images)
VALUES (
  4, 
  ARRAY['Photography'], 
  'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', 
  '245 Broome St, New York, NY',
  ARRAY['https://images.pexels.com/photos/266526/pexels-photo-266526.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']);

INSERT INTO artists (user_id, medium, statement, address, images)
VALUES (
  5, 
  ARRAY['Photography', 'Performance'], 
  'Paradoxical lived experience Foucault abandoned spaces site-specific cultural symbolism phantasmagoric visual text. Barthes abandoned spaces informance gesamkunstwerk codify Horkheimer conceptual structures. Communities of practice transhumanist Neo-Modernism aesthetic object transcend critical discourse urbane simultaneity matrix. Post-industrial conceptual constructs reclaimed histories Derrida appropriating art historical trajectories synesthesia Realism.', 
  '245 Broome St, New York, NY',
  ARRAY['https://images.pexels.com/photos/7007/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260','https://images.pexels.com/photos/236692/pexels-photo-236692.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/277593/pexels-photo-277593.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']);
