module.exports = {
  'Does Chat Exist' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
      .click('button.CHAT')
      .end();
  },
  'Does Chat Open' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
      .click('button.CHAT')
      .pause(1000)
      .verify.elementPresent('div._1b8HzQM8nmpP_VSMq7OnIz')
      .end();
  },
  'Check Chat Name' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
      .click('button.CHAT')
      .pause(1000)
      .assert.containsText("div._3LgOTzOP49NkcKVg-VuAeA", "Jake Kinsella")
      .end();
  },
  'Check Chat Message' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
      .click('button.CHAT')
      .pause(1000)
      .assert.containsText("div.dp2Cn7rCPUkibY9nD2WFj", "This is a test")
      .end();
  }
};