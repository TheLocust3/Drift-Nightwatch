var helpers = require('./../../helpers.js')

const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open Jake's blog$/, () => {
    return client
      .url('https://jakekinsella.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget');
  })

  When(/^I click on Drift$/, () => {
    return client
      .click('button.CHAT');
  })

  When(/^I close Drift$/, () => {
    return client
      .pause(1000)
      .verify.elementPresent('div._1b8HzQM8nmpP_VSMq7OnIz')
      .click('button.DISMISS');
  })

  When(/^I enter text "(.*?)"$/, (text) => {
    helpers.enterText('textarea._1eY_aSnr3MDhZqacV8fugZ', text, client);
    return client;
  })

  Then(/^the name is "(.*?)"$/, (text) => {
    return client
      .pause(1000)
      .assert.containsText("div._3LgOTzOP49NkcKVg-VuAeA", text);
  })

  Then(/^the message is "(.*?)"$/, (text) => {
    return client
      .pause(1000)
      .assert.containsText("div.dp2Cn7rCPUkibY9nD2WFj", text);
  })

  Then(/^first message should be "(.*?)"$/, (text) => {
    return client
      .pause(1000)
      .assert.containsText("div.XnctIpXq756HWNS1GLwPT", text);
  })

  Then(/^email form should be present$/, () => {
    return client
      .waitForElementVisible('form._1Gtju_Jekx_uqFMJML29ZR', 3000)
      .verify.elementPresent('form._1Gtju_Jekx_uqFMJML29ZR')
      .verify.elementPresent('button._1pX4AgCirrd3ONwyrdTrtK');
  })

  Then(/^email label should say "(.*?)"$/, (text) => {
    return client
      .assert.containsText("label._1xnWH0aQJFEhmp915uALhK", text);
  })

  Then(/^email button should say "(.*?)"$/, (text) => {
    return client
      .assert.containsText("button._1pX4AgCirrd3ONwyrdTrtK", text);
  })

  // App

  Given(/^Given I open Drift\'s website$/, () => {
    return client
      .url('https://www.drift.com/')
      .waitForElementVisible('body', 1000);
  })

  Given(/^Given I log into Drift$/, () => {
    helpers.login(client);
    return client;
  })

  Given(/^Given I log out of Drift$/, () => {
    helpers.login(client)
    return client
      .click('div.AgentStatusButton---1zsEk')
      .pause(1000)
      .useXpath()
      .click('//span[text()="Sign Out"]')
      .useCss();
  })

  Then(/^active tab is "(.*?)"$/, (text) => {
    return client
      .useXpath()
      .assert.cssClassPresent('//a[contains(@href, "/' + text + '")]', 'active')
      .useCss();
  })

  When(/^I click tab "(.*?)"$/, (text) => {
    return client
    .useXpath()
    .click('//a[contains(@href, "/' + text + '")]')
    .useCss;
  })
})