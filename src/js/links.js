module.exports = function() {
  return function({ addUtilities, config }) {
    const newUtilities = {
      ".link-primary": {
        "@apply border-b-2 border-primary no-underline color-current": {}
      },
      ".link-primary:hover": {
        "@apply border-secondary": {}
      },
      ".link-secondary": {
        "@apply border-b-2 border-secondary no-underline color-current": {}
      },
      ".link-secondary:hover": {
        "@apply border-primary": {}
      }
    };
    addUtilities(newUtilities);
  };
};
