module.exports = {
  "check-context": {
    create: (context) => {
      // The parserOptions becomes empty only when
      // we use `eslint.config.js` with `@typescript-eslint/parser` .
      console.log(context.parserOptions);
      return {};
    },
  },
};
