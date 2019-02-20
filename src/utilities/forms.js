module.exports = function() {
  return function({ addUtilities, config }) {
    const newUtilities = {
      // Forms
      '.form-line': {
        '@apply flex': {},
      },
      '.form-line .button': {
        '@apply flex items-center': {},
      },
      // Inputs
      '.input': {
        '@apply bg-seashell-light appearance-none border-2 border-gray rounded py-2 px-3 leading-tight': {},
      },
      '.input:focus': {
        '@apply outline-none bg-white border-primary': {},
      },
    };
    addUtilities(newUtilities);
  };
};
