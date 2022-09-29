module.exports = {
  displayName: 'to-do-list-frontend',
  preset: '../../jest.preset.js',
  globals: {
    'vue-jest': {
      tsConfig: './apps/to-do-list-frontend/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue'],
  testTimeout: 10000,
};
