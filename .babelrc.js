const fs = require('fs');
const path = require('path');

module.exports = {
  presets: [
    'react',
    [
      'env',
      {
        modules: false,
        debug: true,
        useBuiltIns: true,
        targets: {
          browsers: fs.readFileSync(path.join(__dirname, '.browserslistrc'), 'utf8').split('\n')
        }
      }
    ],
    'next/babel'
  ],
  plugins: [
    'lodash',
    'transform-flow-strip-types',
    'transform-class-properties',
    ['styled-components', { ssr: true }]
  ],
  env: {
    production: {
      plugins: [['styled-components', { ssr: true, displayName: false }]]
    }
  }
};
