Feature: the-internet.herokuapp.com

  @SmokeTest
  Scenario: main page functionlaity
    Given user navigated to herokuu app
    When user on main page check Title
    Then user clicks on A/B Testing
    Then user on A/B Testing page
