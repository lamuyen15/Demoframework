Feature: Login Jira

  Scenario: Login
    Given Go to page Jira "https://id.atlassian.com/login"
    When User enter "Hung.phan@evizi.com" and click continue button
    When User enter "Hungphan3110" and click log in button
    Then User enter your work page
