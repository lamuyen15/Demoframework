Feature: Issue:
Verify that User can perform function of Issue module

# Scenario: ISS-01: Verify that user can create the new issue into "TO DO" column of the project
# Given User is on Jira start page
# When User click on Projects
# And User select View All Projects Item
# And User open projectTS-practice on the record 
# And User click on the Create button from Header
# And User enter "to do exercise" into Summary field
# And User click Create button
# Then The issue "to do exercise" displays

# Scenario: ISS-02: Verify that the issue of  "TO DO" column can be edited
# Given Users open Jira page 
# When User select View All Projects from Projects 
# And User select projectTS-practice
# And User click "create TC for module user" issue of "TO DO" column
# And User enter "to prepare writing TC" into the Add Comments field 
# And User click on Save button
# Then The comment "to prepare writing TC" displays

# Scenario: ISS-05:Verify that the issue can be removed from the column
# Given Users is on Jira page
# When Users click Project and View All Projects Item
# And Users open projectTS-practice
# And Users click "using Xpath" issue of "TO DO" column
# And Users select More button
# And Users select Delete Item
# And Users select Delete button in the message box
# Then The issue "using Xpath" is not display in "TO DO" column
