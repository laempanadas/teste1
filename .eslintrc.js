module.exports = {
  root: true,
  extends: ['./.eslintrc-browser.json'],
  overrides: [
    {
      files: 'wrapper.js',
      globals: {
        jQuery: false
      }
    }
  ]
};
