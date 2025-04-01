export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    globals: {
        'ts-jest': {
          useBabelrc: true,
        },
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/types.d.ts'],
};  