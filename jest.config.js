/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": ["ts-jest", {}],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testMatch: ["**/__tests__/**/*.(test|spec).(ts|tsx)"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };