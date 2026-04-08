const expoConfig = require("eslint-config-expo/flat");
const prettier = require("eslint-config-prettier");

module.exports = [
  ...expoConfig,
  prettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".expo/",
      "metro.config.js",
      "babel.config.js",
      "tailwind.config.js",
    ],
  },
];
