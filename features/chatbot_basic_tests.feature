Feature: Basic Chatbot Tests

Background:
  Given I open Jake's blog

Scenario: Does Chat Exist

  Given I click on Drift

Scenario: Does Chat Open/Close

  Given I click on Drift
  Given I close Drift

Scenario: Check Basic Chat Info

  Given I click on Drift
  Then the name is "Jake Kinsella"
  And the message is "This is a test"
