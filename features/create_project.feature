Feature: Create project

  Scenario: Create the new project
    Given Go to page Jira "https://id.atlassian.com/login"
    When User enter "uyen.nguyen@evizi.com" and click continue button
    And User enter "lamuyen_0105nt" and click log in button
    And User click on Jira Software 
    And Click on Project
    And Create Project on the navigation bar
    And Click on Scrum template and Use template button
    And Select a team-managed project button
    And User enter the name of project "project3" 
    And User choose Open on the Access dropdown list
    And User click on the Create project button
    # Then User navigate to the new project page
