var helpers = require('./../helpers.js')

module.exports = {
  'Check Active Dashboard' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .assert.cssClassPresent('//a[contains(@href, "/dashboard")]', 'active')
    .end();
  },

  'Check Active Overview' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/overview")]')
    .assert.cssClassPresent('//a[contains(@href, "/overview")]', 'active')
    .end();
  },

  'Check Active Conversations' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/inboxes")]')
    .assert.cssClassPresent('//a[contains(@href, "/inboxes")]', 'active')
    .end();
  },

  'Check Active Contacts' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/users")]')
    .assert.cssClassPresent('//a[contains(@href, "/users")]', 'active')
    .end();
  },

  'Check Active Campaigns' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/campaigns")]')
    .assert.cssClassPresent('//a[contains(@href, "/campaigns")]', 'active')
    .end();
  },

  'Check Active Leadbots' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/leadbots")]')
    .assert.cssClassPresent('//a[contains(@href, "/leadbots")]', 'active')
    .end();
  },

  'Check Active Live View' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/live")]')
    .assert.cssClassPresent('//a[contains(@href, "/live")]', 'active')
    .end();
  },

  'Check Active Settings' : function (browser) {
    helpers.login(browser);
    browser
    .useXpath()
    .click('//a[contains(@href, "/settings")]')
    .assert.cssClassPresent('//a[contains(@href, "/settings")]', 'active')
    .end();
  }
};