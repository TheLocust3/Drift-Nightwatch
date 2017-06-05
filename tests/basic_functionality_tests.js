var helpers = require('./../helpers.js')

module.exports = {
  'Does Chat Exist' : function (browser) {
    helpers.setupTest(browser)
    browser.end();
  },
  'Does Chat Open/Close' : function (browser) {
    helpers.setupTest(browser)
    browser
      .pause(1000)
      .verify.elementPresent('div._1b8HzQM8nmpP_VSMq7OnIz')
      .click('button.DISMISS')
      .end();
  },
  'Check Chat Name' : function (browser) {
    helpers.setupTest(browser)
    browser
      .pause(1000)
      .assert.containsText("div._3LgOTzOP49NkcKVg-VuAeA", "Jake Kinsella")
      .assert.containsText("div.dp2Cn7rCPUkibY9nD2WFj", "This is a test")
      .end();
  }
};