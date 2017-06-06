module.exports = {
  setupTest: function (browser) {
    browser
      .useCss()
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
      .click('button.CHAT');
  },

  enterText: function (selector, text, browser) {
    browser
    .useCss()
    .setValue(selector, text)
    .pause(1000)
    .setValue(selector, [browser.Keys.ENTER]);
  },

  login: function(browser) {
    browser
    .useCss()
    .url("https://app.drift.com");
    
    this.enterText('input[type=email]', process.env.USERNAME, browser);
    this.enterText('input[type=password]', process.env.PASSWORD, browser);
    
    browser.waitForElementVisible('div.App', 3000)
  }
};
