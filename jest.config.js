/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  testEnvironment: "jsdom",

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "vue"
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  }
};
