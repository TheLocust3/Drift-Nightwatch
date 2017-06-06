var helpers = require('./../helpers.js')

module.exports = {
  'Test Log In' : function (browser) {
    helpers.login(browser);
    browser.end();
  }
};