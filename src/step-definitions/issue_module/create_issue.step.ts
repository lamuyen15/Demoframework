import assert from "assert";
import { Given, Then, When, World } from "cucumber";
import { createIssuePage } from "../../page/issue_module_page/create_issue.page";

let createdIssue: createIssuePage;

Given(/^User is on Jira start page/, async function (this: World) {
  createdIssue = new createIssuePage(this.driver);
  await createdIssue.openJiraPage();
});

When(/^User click on Projects/, async function (this: World) {
  createdIssue = new createIssuePage(this.driver);
  await createdIssue.openProject();
});

When(/^User select View All Projects Item/, async function (this: World) {
  createdIssue = new createIssuePage(this.driver);
  await createdIssue.openViewAll();
});
When(
  /^User open projectTS-practice on the record/,
  async function (this: World) {
    createdIssue = new createIssuePage(this.driver);
    await createdIssue.openProjectInTheRecord();
  }
);
When(
  /^User click on the Create button from Header/,
  async function (this: World) {
    createdIssue = new createIssuePage(this.driver);
    await createdIssue.openCreateIssueField();
  }
);
When(
  /^User enter "([^"]*)" into Summary field/,
  async function (this: World, nameIssue: string) {
    createdIssue = new createIssuePage(this.driver);
    await createdIssue.enterIssue(nameIssue);
  }
);
When(/^User click Create button/, async function (this: World) {
  createdIssue = new createIssuePage(this.driver);
  await createdIssue.clickCreateBtn();
});
Then(/^The issue "to do exercise" displays/, async function (this: World) {
  createdIssue = new createIssuePage(this.driver);
  let isCreatedIssue= await createdIssue.newIssueDisplays();
  assert.equal(isCreatedIssue,true);
});
