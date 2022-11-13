const tsParser = require("@typescript-eslint/parser");
const localRules = require("./eslint-local-rules");

const useTsParser = process.env.TS_PARSER === "true";

// https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
module.exports = [
  {
    languageOptions: {
      sourceType: "module",
      ...(useTsParser ? { parser: tsParser } : {}),
    },
    plugins: {
      "local-rules": { rules: localRules },
    },
    rules: {
      "local-rules/check-context": "error",
    },
  },
];
