DROP TABLE IF EXISTS users_questions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;


CREATE TABLE IF NOT EXISTS users (
  user_id SMALLSERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(15) NOT NULL,
  user_pw VARCHAR(15) NOT NULL,
  user_alias VARCHAR(20) NOT NULL,
  points INT NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
  question_id SMALLSERIAL NOT NULL PRIMARY KEY,
  question_frontend_id INT NOT NULL,
  question_title VARCHAR(100) NOT NULL,
  question_title_slug VARCHAR(100) NOT NULL,
  difficult_lvl INT
);

CREATE TABLE IF NOT EXISTS users_questions (
  id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id),
  question_id INT NOT NULL REFERENCES questions(question_id),
  send_date TIMESTAMP WITH TIME ZONE NOT NULL,
  submit_date TIMESTAMP WITH TIME ZONE,
  is_finished BOOLEAN NOT NULL,
  note VARCHAR(100)
);

INSERT INTO users (username, user_pw, user_alias, points)
  VALUES ('jonathantch', 'password', 'Jonathan', 0);

COPY questions (question_frontend_id, question_title, question_title_slug, difficult_lvl) from '/Users/jonathan/hrsf/leetcode-study-app/server/db/seed/questions.csv' DELIMITER ',' CSV HEADER;

INSERT INTO users_questions (user_id, question_id, send_date, submit_date, is_finished, note) VALUES 
  (1, 1, current_timestamp, null, FALSE, null),
  (1, 2, current_timestamp, null, FALSE, null),
  (1, 3, current_timestamp, null, FALSE, null);