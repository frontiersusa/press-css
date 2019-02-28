const plugins = require('./plugins');
const theme = require('./theme');
const modules = require('./variants');

const config = Object.assign(theme, {
  modules,
  plugins,
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
});

module.exports = config;
