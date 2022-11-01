Feature: Project

  Scenario: PRO-01: Verify that user can create the new project succesfully
    Given User is on start page
    When User open on Jira Software 
    And User select Project from header menu
    And User select Create Project 
    And User open Software Development on Projects template page
    And User select Scrum template and Use template button
    And User select a team-managed project button
    And User create project with name "demoproject10" 
    And User choose Open on the Access dropdown list
    And User select the Create project button in the project create page
    Then New project "demoproject10" displays


  # Scenario: PRO-02: Verify that the project can be removed successfully
  #   Given User is on Project created
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


# Scenario: PRO-04: Verify that people can be added into the project
#     Given User is on Project page
#     When User select "practice-projectTS" on the record of the result
#     And User select Project Setting on the left of navigation bar
#     And User choose Access Item on the left of navigation bar
#     And User select Add people button on the right of top page
#     And User enter people with name "hung.phan@evizi.com"
#     And User choose Administrator on the Role dropdown list
#     And User select Add button
#     Then The new person "Hung Phan Hai Dao" displays

Scenario:Verify that user can open the recent project from the system
Given User is on Jira Software page
# When User open Project from header menu
# And User select the recent project with name "practice-projectTS"
# And User navigates to the recent project page
# Then User is on "practice-projectTS" page



