import { Given, Then, When, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { editIssuePage } from "../page/edit_issue.page";

let editIssue: editIssuePage;
Given(/^Users open Jira page/, async function (this: World) {
  editIssue = new editIssuePage(this.driver);
  await editIssue.openJira();
});

When(
  /^User select View All Projects from Projects/,
  async function (this: World) {
    editIssue = new editIssuePage(this.driver);
    await editIssue.selectViewAllProjects();
  }
);
When(/^User select projectTS-practice/, async function (this: World) {
  editIssue = new editIssuePage(this.driver);
  await editIssue.selectProjectTS();
});
When(
  /^User click "create TC for module user" issue of "TO DO" column/,
  async function (this: World) {
    editIssue = new editIssuePage(this.driver);
    await editIssue.selectIssue();
  }
);
When(/^User enter "([^"]*)" into the "What need to be done" field /, async function(this:World,issue:string){
    editIssue = new editIssuePage(this.driver);
    await editIssue.updateIssue(issue);
});
When(/^User click on "Check mark" icon /,async function (this:World){
    editIssue = new editIssuePage(this.driver);
    await editIssue.clickCheckMarkBtn();
});
When (/^User select Close button/,async function(this:World){
    editIssue = new editIssuePage(this.driver);
    await editIssue.clickCloseBtn();
});
Then(/^The name of issue has been changed/,async function(this:World){
    editIssue = new editIssuePage(this.driver);
    await editIssue.issueDisplays();
})
