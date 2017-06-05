function setupTest(browser) {
  browser
    .url(browser.launchUrl)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('iframe#drift-widget', 1000)
    .frame('drift-widget')
    .click('button.CHAT');
}

function enterText(selector, text, browser) {
  browser.setValue(selector, text)
  .pause(1000)
  .setValue(selector, [browser.Keys.ENTER]);
}

module.exports = {
  'Test Sending Message' : function (browser) {
    setupTest(browser)
    enterText('textarea._1eY_aSnr3MDhZqacV8fugZ', 'test', browser)
    browser.end();
  }
};