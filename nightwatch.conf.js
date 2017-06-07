const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
