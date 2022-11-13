const useTsParser = process.env.TS_PARSER === "true";

module.exports = {
  root: true,
  parser: useTsParser ? "@typescript-eslint/parser" : undefined,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["eslint-plugin-local-rules"],
  rules: {
    "local-rules/check-context": "error",
  },
};
