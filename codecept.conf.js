const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const path = require('path');
const resolvedPath = path.resolve('app/JandaIA.app');

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: resolvedPath,
      platform: 'iOS',
      desiredCapabilities: {
        automationName: 'XCUITest',
        platformVersion: '18.2',
        deviceName: 'iPhone 16 Pro'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'app-testes-ios'
}