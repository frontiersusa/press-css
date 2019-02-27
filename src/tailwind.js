const plugins = require('./plugins');
const theme = require('./theme');
const modules = require('./variants');

// Export
module.exports = {
  ...theme,
  modules,
  plugins,
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
