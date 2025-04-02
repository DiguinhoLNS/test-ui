/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testMatch: [
        "**/__tests__/**/*.(test|spec).(ts|tsx)",
        "**/?(*.)+(test|spec).(ts|tsx)"
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transformIgnorePatterns: [
        '/node_modules/',
    ]
}