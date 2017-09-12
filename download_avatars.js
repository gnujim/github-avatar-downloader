require('dotenv').config();
const request = require('request');
const fetch = require('node-fetch');

const GITHUB_USER = 'gnujim';
const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

const getRepoContributors = (repoOwner, repoName, cb) => {
  const options = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };
  request
    .get(options, data => {
      fetch(options.url)
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
        });
    })
    .on('error', err => {
      throw err;
    })
    .on('response', response => {
      console.log(
        `Response Status Message: ${response.statusCode} ${response.statusMessage}`
      );
    });
};

getRepoContributors('jquery', 'jquery', (err, result) => {
  console.log(`Errors: ${err}`);
  console.log(`Results: ${result}`);
});
