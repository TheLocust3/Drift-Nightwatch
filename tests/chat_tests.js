var helpers = require('./../helpers.js')

module.exports = {
  'Test Sending Message' : function (browser) {
    helpers.setupTest(browser)
    helpers.enterText('textarea._1eY_aSnr3MDhZqacV8fugZ', 'test', browser)
    browser.end();
  }
};