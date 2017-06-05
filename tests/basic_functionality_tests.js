var helpers = require('./../helpers.js')

module.exports = {
  'Does Chat Exist' : function (browser) {
    helpers.setupTest(browser)
    browser.end();
  },
  'Does Chat Open' : function (browser) {
    helpers.setupTest(browser)
    browser
      .pause(1000)
      .verify.elementPresent('div._1b8HzQM8nmpP_VSMq7OnIz')
      .end();
  },
  'Does Chat Close' : function (browser) {
    helpers.setupTest(browser)
    browser
      .pause(1000)
      .click('button.DISMISS')
      .end();
  },
  'Check Chat Name' : function (browser) {
    helpers.setupTest(browser)
    browser
      .pause(1000)
      .assert.containsText("div._3LgOTzOP49NkcKVg-VuAeA", "Jake Kinsella")
      .end();
  },
  'Check Chat Welcome Message' : function (browser) {
    helpers.setupTest(browser)
    browser
      .pause(1000)
      .assert.containsText("div.dp2Cn7rCPUkibY9nD2WFj", "This is a test")
      .end();
  }
};