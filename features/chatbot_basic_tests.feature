Feature: Basic Chatbot Tests

Background:
  Given I open Jake's blog

Scenario: Does Chat Exist

  When I click on Drift

Scenario: Does Chat Open/Close

  When I click on Drift
  When I close Drift

Scenario: Check Basic Chat Info

  When I click on Drift
  Then the name is "Jake Kinsella"
  And the message is "This is a test"
