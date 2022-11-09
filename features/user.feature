Feature: User:
Verify that User can perform function of Users module

Scenario: PP-01: Verify that user can search people 
Given User is on JiraSoftware page
When User click search field from Header
And User enter the name of person with name "Tien Tran"
And User select People button
Then The user with name "Tien Tran" displays

