const fs = require('fs');
const axios = require('axios');

const writer = fs.createWriteStream('./questions.csv');

const seedProblems = () => {
  axios.get('https://leetcode.com/api/problems/algorithms/')
    .then(({ data }) => {
      let result = 'question_frontend_id,question_title,question_title_slug,difficult_lvl\n';
      let problems = data.stat_status_pairs;
      for (let i = problems.length - 1; i >= 0; i--) {
        result += `${problems[i].stat.frontend_question_id},"${problems[i].stat.question__title}","${problems[i].stat.question__title_slug}",${problems[i].difficulty.level}\n`;
      }
      // console.log(result)
      writer.write(result);
    })
    .catch(err => console.log(err));
}

seedProblems();