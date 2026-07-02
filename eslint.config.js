export default [
  {
    ignores: ["node_modules/**", "dist/**", "coverage/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        cancelAnimationFrame: "readonly",
        document: "readonly",
        Event: "readonly",
        HTMLElement: "readonly",
        Math: "readonly",
        NodeList: "readonly",
        performance: "readonly",
        requestAnimationFrame: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "block-scoped-var": "error",
      curly: ["error", "multi-line"],
      eqeqeq: ["error", "always"],
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-redeclare": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "no-use-before-define": [
        "error",
        {
          functions: false
        }
      ]
    }
  }
];
