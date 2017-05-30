const fs = require('fs');
const path = require('path');

const token = fs.readFileSync(path.join(__dirname, 'github-token.txt'), 'utf8');

module.exports = {
  github: {
    token,
    endpoint: 'https://api.github.com/graphql'
  }
};
