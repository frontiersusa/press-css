const plugins = require('./plugins');
const theme = require('./theme');
const variants = require('./variants');

module.exports = {
  purge: false,
  theme,
  variants,
  corePlugins: {},
  plugins,
};
