import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "key-spacing": [
        "error",
        {
          singleLine: {
            mode: "strict",
            beforeColon: false,
            afterColon: true,
          },
          multiLine: {
            mode: "strict",
            beforeColon: false,
            afterColon: true,
            align: "colon",
          },
        },
      ],

      //

      "no-multi-spaces": "off",
      "arrow-parens": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-before-function-paren": ["error", "always"],
      "no-spaced-func": "error",
      "space-infix-ops": "error",
      "space-in-parens": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
      quotes: ["error", "single"],
      // "max-len": ["error", { code: 120 }],
      "comma-dangle": ["error", "never"],
      "object-curly-newline": "off",
      "object-curly-spacing": ["error", "always"],
      "quote-props": ["error", "as-needed"],
      "dot-notation": "error",
      "object-property-newline": "off",
      "lines-between-class-members": "off",
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-tabs": "error",
      "no-multiple-empty-lines": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "jsx-quotes": ["error", "prefer-double"],

      // other
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "no-param-reassign": ["error", { props: false }],
      "no-await-in-loop": "off",
      "max-classes-per-file": "error",
      "no-nested-ternary": "off",
      "no-shadow": "off",
      "no-void": "error",
      "no-unused-vars": "off",
      "no-use-before-define": ["error", { functions: false }],
      "prefer-template": "error",
      "no-dupe-keys": "error",
      "prefer-promise-reject-errors": "off",
      "space-before-blocks": ["error", "always"],
    },
  }
);
