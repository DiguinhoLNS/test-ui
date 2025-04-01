export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
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
        '/node_modules/(?!(your-package-name|another-package-name)/)',
    ],
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/types.d.ts'],
};  