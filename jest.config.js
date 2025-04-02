/** @type {import('ts-jest').JestConfigWithTsJest} **/
export const testEnvironment = "jsdom";
export const transform = {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
};
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx"];
export const testMatch = [
    "**/__tests__/**/*.(test|spec).(ts|tsx)",
    "**/?(*.)+(test|spec).(ts|tsx)"
];
export const setupFilesAfterEnv = ["<rootDir>/jest.setup.js"];
export const transformIgnorePatterns = [
    '/node_modules/',
];