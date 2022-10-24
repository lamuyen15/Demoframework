Feature: Create project

  Scenario: Create the new project
    Given Go to page Jira "https://id.atlassian.com/login"
    When User enter "uyen.nguyen@evizi.com" and click continue button
    When User enter "lamuyen_0105nt" and click log in button
    When User click on Jira Software and click on Project and Create Project on the navigation bar
    When Click on Scrum template,Use template button and Select a team-managed project
    When User enter "project3" and choose Open on the Acess dropdown list
    When User click on the Create project button
    Then User navigate to the new project page
