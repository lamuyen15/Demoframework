Feature: Issue:
Verify that User can perform function of Issue module

Scenario: ISS-01: Verify that user can create the new issue into "TO DO" column of the project
Given User is on Jira start page
When User click on Projects
And User select View All Projects Item
And User select projectTS-practice on the record 
And User click on the  "+ Create Issue" at "TO DO" column
And User enter "to do exercise"
And User Press keyboard Enter
Then the issue "to do exercise" displays