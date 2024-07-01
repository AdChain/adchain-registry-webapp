module.exports = {
  //...
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"), // include a polyfill for xyz
    },
  },
};
