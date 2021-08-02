module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": 1,
    "prettier/prettier": 2,
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
  },
  overrides: [
    {
      files: ["src/shared/loggers/console.logger.ts"],
      rules: {
        "no-console": "off",
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
};
