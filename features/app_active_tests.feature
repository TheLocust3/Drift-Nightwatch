Feature: Basic App Tests

Scenario: Check active dashboard

  Given I open Drift's website
  Given I log into Drift
  Then active tab is "dashboard"

Scenario: Check active overview

  When I click tab "overview"
  Then active tab is "overview"

Scenario: Check active conversations

  When I click tab "inboxes"
  Then active tab is "inboxes"

Scenario: Check active contacts

  When I click tab "users"
  Then active tab is "users"

Scenario: Check active campaigns

  When I click tab "campaigns"
  Then active tab is "campaigns"

Scenario: Check active leadbots

  When I click tab "leadbots"
  Then active tab is "leadbots"

Scenario: Check active live view
  
  When I click tab "live"
  Then active tab is "live"

Scenario: Check active settings

  When I click tab "settings"
  Then active tab is "settings"
  Given I log out of Drift
