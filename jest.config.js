const { compilerOptions } = require("./tsconfig");

module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],

  testEnvironment: "node",
  testRegex: ".spec.ts$",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/../src/$1",
  },
};
