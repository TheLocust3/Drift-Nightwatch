var helpers = require('./../../helpers.js')

const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open Drift\'s website$/, () => {
    return client
      .url('https://app.drift.com/')
      .waitForElementVisible('body', 1000);
  })

  Given(/^I log into Drift$/, () => {
    helpers.login(client);
    return client;
  })

  Given(/^I log out of Drift$/, () => {
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