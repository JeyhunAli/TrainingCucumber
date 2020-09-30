#Author: 
Feature: Hubspot Login

  @SmokeTest3
  Scenario Outline: Hubspot login with diffrent credentials
    Given I m entering hubspot url
    And verifying signUp link is there
    When user enter "<username>", and "<password>"
    And user click on the login button

    Examples: 
      | username |  | password   |  |
      | jeyhun   |  | success    |  |
      | Emiliya  |  | pass       |  |
      | Nastyush |  | gelmishdun |  |
