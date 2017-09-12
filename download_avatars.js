require('dotenv').config();
const request = require('request');
const fs = require('fs');

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
      cb(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.message) {
      cb(data);
      return;
    }
    cb(undefined, data);
  });
};

const downloadImageByURL = (url, filePath) => {
  request
    .get(url)
    .on('error', err => {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath));
};

//step 10 - make them required arguments --here--
const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && arg2) {
  getRepoContributors(process.argv[2], process.argv[3], (err, result) => {
    if (err) {
      console.log(err);
      // throw err;
      return;
    }
    result.forEach(user => {
      let avatarURL = user.avatar_url;
      let path = `avatars/${user.login}.jpg`;
      downloadImageByURL(avatarURL, path);
    });
  });
} else {
  console.log('Please enter BOTH owner and repo.');
}
