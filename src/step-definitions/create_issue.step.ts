import { Given, Then, When, World } from "cucumber";
import { createIssuePage } from "../page/create_issue.page";


let createIssue :  createIssuePage;

Given(/^User is on Jira start page/, async function (this: World) {
  createIssue = new createIssuePage(this.driver);
  await createIssue.openJiraPage();
});

When(/^User click on Projects/, async function (this: World) {
  createIssue = new createIssuePage(this.driver);
  await createIssue.openProject();
});

When(/^User select View All Projects Item/, async function (this: World) {
   createIssue = new createIssuePage(this.driver);
  await createIssue.openViewAll();
});
When(
  /^User select projectTS-practice on the record/,
  async function (this: World) {
   createIssue = new createIssuePage(this.driver);
    await createIssue.openProjectInTheRecord();
  }
);
When(
  /^User click on the Create button from Header/,
  async function (this: World) {
    createIssue = new createIssuePage(this.driver);
    await createIssue.openCreateIssueField();
  }
);
When(/^User enter "([^"]*)" into Summary field/, async function (this: World, nameIssue: string) {
  createIssue = new createIssuePage(this.driver);
  await createIssue.enterIssue(nameIssue);
});
When (/^User click Create button/,async function(this:World){
    createIssue = new createIssuePage(this.driver);
    await createIssue.clickCreateBtn();
})  
Then (/^The issue "to do exercise" displays/,async function(this:World){
  createIssue = new createIssuePage(this.driver);
  await createIssue.newIssueDisplay();
})