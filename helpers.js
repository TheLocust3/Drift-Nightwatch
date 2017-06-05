module.exports = {
  setupTest: function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
      .click('button.CHAT');
  },

  enterText: function (selector, text, browser) {
    browser
    .setValue(selector, text)
    .pause(1000)
    .setValue(selector, [browser.Keys.ENTER]);
  }
};
