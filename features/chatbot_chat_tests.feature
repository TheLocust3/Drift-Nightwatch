Feature: Chatbot Chat Tests

Background:
  Given I open Jake's blog

Scenario: Test Sending Message

  When I click on Drift
  When I enter text "test"

Scenario: Check Sent Message

  When I click on Drift
  When I enter text "test"
  Then first message should be "test"

Scenario: Check Email Message

  When I click on Drift
  When I enter text "test"
  Then email form should be present
  Then email label should say "EMAIL ADDRESS"
  Then email button should say "SUBMIT"
