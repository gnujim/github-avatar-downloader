const request = require('request');
const GITHUB_USER = 'gnujim';
const GITHUB_TOKEN = '33cae84277b6485a00593a188cd142543e1d8807';

const getRepoContributors = (repoOwner, repoName, cb) => {
  const requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  console.log(requestURL);
};

getRepoContributors('jquery', 'jquery', (err, result) => {
  console.log(`Errors: ${err}`);
  console.log(`Results: ${result}`);
});
