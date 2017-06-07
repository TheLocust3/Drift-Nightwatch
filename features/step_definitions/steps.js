const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open Jake's blog$/, () => {
    return client
      .url('https://jakekinsella.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('iframe#drift-widget', 1000)
      .frame('drift-widget')
  })

  Given(/^I click on Drift$/, () => {
    return client
      .click('button.CHAT');
  })

  Given(/^I close Drift$/, () => {
    return client
      .pause(1000)
      .verify.elementPresent('div._1b8HzQM8nmpP_VSMq7OnIz')
      .click('button.DISMISS')
  })

  Then(/^the name is "(.*?)"$/, (text) => {
    return client
      .pause(1000)
      .assert.containsText("div._3LgOTzOP49NkcKVg-VuAeA", text)
  })

  Then(/^the message is "(.*?)"$/, (text) => {
    return client
      .pause(1000)
      .assert.containsText("div.dp2Cn7rCPUkibY9nD2WFj", text)
  })
})