var helpers = require('./../helpers.js')

module.exports = {
  'Log In' : function (browser) {
    browser
      .url(browser.launchUrl)
      .end();
  }
};