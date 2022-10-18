Feature: Login Jira

  Scenario Outline: Login Jira website with administration account
    Given I am on Jira page
    When I enter Email Address <username>
    When I click on Continue button
    When I enter Password <password>
    Then I click on login button

    Examples: 
      | username                | password         |
      | "uyen.nguyen@evizi.com" | "lamuyen_0105nt" |
