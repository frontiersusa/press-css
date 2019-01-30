module.exports = function() {
  return function({ addUtilities, config }) {
    const newUtilities = {
      // Forms
      ".form-line": {
        "@apply flex": {}
      },
      ".form-line .button": {
        "@apply flex items-center": {}
      },
      // Inputs
      ".input": {
        "@apply bg-grey-lighter appearance-none border-2 border-grey rounded py-2 px-3 text-grey-darker leading-tight": {}
      },
      ".input:focus": {
        "@apply outline-none bg-white border-primary": {}
      }
    };
    addUtilities(newUtilities);
  };
};
