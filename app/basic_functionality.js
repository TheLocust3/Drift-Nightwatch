var helpers = require('./../helpers.js')

module.exports = {
  'Test Log In' : function (browser) {
    helpers.login(browser);
    browser.end();
  },

  'Test Log Out' : function (browser) {
    helpers.login(browser);
    browser
    .click('div.AgentStatusButton---1zsEk')
    .pause(1000)
    .useXpath()
    .click('//span[text()="Sign Out"]')
    .end();
  }
};