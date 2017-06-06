var helpers = require('./../helpers.js')

module.exports = {
  'Log In' : function (browser) {
    browser.url("https://app.drift.com")
    
    helpers.enterText('input[type=email]', process.env.USERNAME, browser);
    helpers.enterText('input[type=password]', process.env.PASSWORD, browser);
    
    browser.pause(1000)
    //browser.end();
  }
};