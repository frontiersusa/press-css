const _ = require("lodash");

module.exports = function({ links }) {
  return function({ addComponents, e }) {
    const components = [
      {
        ".link": {
          "@apply border-b-2 border-primary no-underline color-current": {},
          "&:hover": {
            "@apply border-secondary": {}
          }
        }
      },
      _.map(links, ([normalState, hoverState], name) => ({
        [`.link-${e(name)}`]: {
          "border-color": `${normalState}`,
          "@apply border-b-2 no-underline color-current": {},
          "&:hover": {
            "border-color": `${hoverState}`
          }
        }
      }))
    ];

    addComponents(components);
  };
};
