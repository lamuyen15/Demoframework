Feature: Login Jira
@before
  Scenario: Login
    Given Go to page Jira "https://id.atlassian.com/login"
    When User enter "uyen.nguyen@evizi.com" and click continue button
    When User enter "lamuyen_0105nt" and click log in button
    Then User enter your work page
