Feature: Project:
Verify that User can perform function of Project module

  # Scenario: PRO-01: Verify that user can create the new project succesfully
  #   Given User is on start page
  #   When User open on Jira Software 
  #   And User select Project from header menu
  #   And User select Create Project 
  #   And User open Software Development on Projects template page
  #   And User select Scrum template and Use template button
  #   And User select a team-managed project button
  #   And User create project with name "demoproject10" 
  #   And User select the Create project button in the project create page
  #   Then New project "demoproject10" displays


  # Scenario: PRO-02: Verify that the project can be removed successfully
  #   Given User select Jira page
  #   When User select Project button 
  #   And User select View All Projects via the navigation bar on project list page
  #   And User select More button of project "Project_3" on the record of result
  #   And User choose Move to trash from dropdown list
  #   And User select Move button on the message box
  #   And User choose Go to Trash on the message box
  #   And User choose More button of project "Project_3" on the record of result on the Trash page
  #   And User select Delete permanently on the dropdown list
  #   And User choose Delete button on the message box
  #   Then The message about remove project displays
 

  #  Scenario:PRO_03: Verify that user can open the recent project from the system
  #   Given User is at Jira Software Page
  #   When User is on Projects page
  #   And User select the recent project with name "Project1"
  #   Then User is on "Project1" page


  Scenario: PRO-04: Verify that people can be added into the project
    Given User select Jira Software page
    When User is on Project page
    And User select "practice-projectTS" on the record of the result
    And User select Project Setting on the left of navigation bar
    And User choose Access Item on the left of navigation bar
    And User select Add people button on the right of top page
    And User enter people with name "hung.phan@evizi.com"
    And User select Add button
    Then The new person "Hung Phan Hai Dao" displays


  # Scenario: PRO-05: Verify that user can search the board of the project
  #   Given User is at Jira Software page
  #   When User open Project page
  #   And User select View All Projects on project list page
  #   And User choose "practice-projectTS" on the record of result
  #   And User enter "create 10-15TC" into the search the board field
  #   Then The board "create 10-15TC" displays