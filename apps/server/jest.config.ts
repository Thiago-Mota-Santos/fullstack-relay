/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],

  preset: 'ts-jest',
  resetModules: false,
  setupFiles: ['./test/jest.setup.ts'],
  testEnvironment: './test/environment/mongodb.ts',
  testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
}
