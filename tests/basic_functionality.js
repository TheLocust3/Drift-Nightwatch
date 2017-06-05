function setupTest(browser) {
  browser
    .url(browser.launchUrl)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('iframe#drift-widget', 1000)
    .frame('drift-widget')
    .click('button.CHAT')
}

module.exports = {
  'Does Chat Exist' : function (browser) {
    setupTest(browser)
    browser.end();
  },
  'Does Chat Open' : function (browser) {
    setupTest(browser)
    browser
      .pause(1000)
      .verify.elementPresent('div._1b8HzQM8nmpP_VSMq7OnIz')
      .end();
  },
  'Does Chat Close' : function (browser) {
    setupTest(browser)
    browser
      .pause(1000)
      .click('button.DISMISS')
      .end();
  },
  'Check Chat Name' : function (browser) {
    setupTest(browser)
    browser
      .pause(1000)
      .assert.containsText("div._3LgOTzOP49NkcKVg-VuAeA", "Jake Kinsella")
      .end();
  },
  'Check Chat Welcome Message' : function (browser) {
    setupTest(browser)
    browser
      .pause(1000)
      .assert.containsText("div.dp2Cn7rCPUkibY9nD2WFj", "This is a test")
      .end();
  }
};