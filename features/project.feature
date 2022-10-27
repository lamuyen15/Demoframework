Feature: Project

  Scenario: Create the new project
    Given User is on start page
    When User open on Jira Software 
    And User select Project from header menu
    And User select Create Project via the navigation bar on project list page
    And User open Software Development on Projects template page
    And User select Scrum template and Use template button
    And User select a team-managed project button
    And User create project with name "demoproject10" 
    And User choose Open on the Access dropdown list
    And User select the Create project button on the bottom of the project create page
    Then New project "demoproject10" displays


  Scenario: Remove the project
    Given User is on Project created
  # #   # And User select More button of project "Project3" on the record of result
  # #   # And User choose Move to trash from dropdown list
  # #   # And User select Move button on the message box
  # #   # Then The message box displays
  



