module.exports = {
  'Does Chat Exist' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('iframe#drift-widget')
      .click('iframe#drift-widget')
      .end();
  }
};