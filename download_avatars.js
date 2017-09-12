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
  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    console.log(data);
  });
};

getRepoContributors('jquery', 'jquery', (err, result) => {
  console.log(`Errors: ${err}`);
});
