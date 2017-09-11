const request = require('request');

const getRepoContributors = (repoOwner, repoName, cb) => {};

getRepoContributors('jquery', 'jquery', (err, result) => {
  console.log(`Errors: ${err}`);
  console.log(`Results: ${result}`);
});
