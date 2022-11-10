Feature: User:
Verify that User can perform function of Users module

# Scenario: PP-01: Verify that user can search people 
# Given User is on JiraSoftware page
# When User click search field from Header
# And User enter the name of person with name "Tien Tran"
# And User select People button
# Then The user with name "Tien Tran" displays

Scenario: PP-03: Verify that the user can create the group
Given User select JiraSoftware page
When User More button from Header
And User open People Item
And User select "Create team"
And User enter "Team project 1" into team name field
And User enter name "Tien Tran" into Invite People field
And User click "Tien Tran" on the dropdown list
Then The message about "Team project 1" is created successfully


