import js from "@eslint/js";
import wdio from "eslint-plugin-wdio";

export default [
  js.configs.recommended,
  {
    plugins: {
      wdio,
    },
    rules: {
      ...wdio.configs.recommended.rules,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: "readonly",
      },
    },
  },
];