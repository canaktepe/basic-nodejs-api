// eslint-disable-next-line no-unused-vars
const path = require('path');

module.exports = {
  outputDir: path.resolve(path.join(__dirname, '../server/public')),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      }
    },
  },
};
