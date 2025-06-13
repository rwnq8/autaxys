// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': ['ts-jest', {
      tsconfig: 'tsconfig.json' 
    }]
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['<rootDir>/tests'], // Only look for tests in the tests directory
  testMatch: [ 
    "**/tests/**/*.test.ts" // A simpler pattern to find tests
  ],
  testPathIgnorePatterns: [ // Ignore E2E tests
    "/node_modules/",
    "/dist/",
    ".e2e.test.ts"
  ],
};