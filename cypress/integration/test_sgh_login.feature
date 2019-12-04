Feature: Login attempts to SGH web site

Background:
    Given browser is on sign-in page

@focus
Scenario: successful sign-in
    Given user has valid credentials
    When user sign-in
    Then the browser should show the welcome page