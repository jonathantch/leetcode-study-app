const express = require('express');
const db = require('./db');
const morgan = require('morgan');

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'))


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/:username', (req, res) => {
  let username = req.params.username;
  db.query(`
    SELECT
      q.question_id,
      q.question_frontend_id,
      q.question_title,
      q.question_title_slug,
      q.difficult_lvl,
      uq.send_date,
      uq.submit_date,
      uq.is_finished,
      uq.note
    FROM
      users_questions AS uq
    INNER JOIN
      users AS u
      ON u.user_id = uq.user_id
    INNER JOIN
      questions as q
      ON q.question_id = uq.question_id
    WHERE
      u.username = '${username}';
  `)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
    })
});
