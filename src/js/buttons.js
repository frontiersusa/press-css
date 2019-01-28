const _ = require("lodash");

module.exports = function({ buttons, variants }) {
  return function({ addUtilities, e }) {
    const utilities = _.map(buttons, ([color, hover], name) => ({
      [`.button-${e(name)}`]: {
        "background-color": `${color}`
      }
    }));

    addUtilities(utilities, variants);
  };
};
