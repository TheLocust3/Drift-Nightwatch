var helpers = require('./../helpers.js')

module.exports = {
  'Test Sending Message' : function (browser) {
    helpers.setupTest(browser);
    helpers.enterText('textarea._1eY_aSnr3MDhZqacV8fugZ', 'test', browser);
    browser.end();
  },
  'Check Sent Message' : function (browser) {
    helpers.setupTest(browser);
    helpers.enterText('textarea._1eY_aSnr3MDhZqacV8fugZ', 'test', browser);
    browser
    .pause(1000)
    .assert.containsText("div.XnctIpXq756HWNS1GLwPT", "test")
    .end();
  },
  'Check Email Message' : function (browser) {
    helpers.setupTest(browser);
    helpers.enterText('textarea._1eY_aSnr3MDhZqacV8fugZ', 'test', browser);
    browser
    .pause(1000)
    .verify.elementPresent('form._1Gtju_Jekx_uqFMJML29ZR')
    .verify.elementPresent('button._1pX4AgCirrd3ONwyrdTrtK')
    .assert.containsText("label._1xnWH0aQJFEhmp915uALhK", "EMAIL ADDRESS")
    .assert.containsText("button._1pX4AgCirrd3ONwyrdTrtK", "SUBMIT")
    .end();
  }
};