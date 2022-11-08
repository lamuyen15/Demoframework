import assert from "assert";
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
When(
  /^User enter "([^"]*)" into the Add Comments field/,
  async function (this: World, issue: string) {
    editIssue = new editIssuePage(this.driver);
    await editIssue.updateIssue(issue);
  }
);
When(/^User click on Save button/, async function (this: World) {
  editIssue = new editIssuePage(this.driver);
  await editIssue.clickSaveBtn();
});

Then(
  /^The comment "to prepare writing TC" displays/,
  async function (this: World) {
    editIssue = new editIssuePage(this.driver);
    await editIssue.issueDisplays();
 
  }
);
