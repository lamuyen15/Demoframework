import { Given, Then, When, World } from "cucumber";
import { removeIssuePage } from "../page/remove_issue.page";

let removeIssue: removeIssuePage;
Given(/^Users is on Jira page/, async function (this: World) {
  removeIssue = new removeIssuePage(this.driver);
  await removeIssue.isOnJiraPage();
});
When(
  /^Users click Project and View All Projects Item/,
  async function (this: World) {
    removeIssue = new removeIssuePage(this.driver);
    await removeIssue.openViewAll();
  }
);
When(/^Users open projectTS-practice/, async function (this: World) {
  removeIssue = new removeIssuePage(this.driver);
  await removeIssue.openProjectTS();
});
When(
  /^Users click "using Xpath" issue of "TO DO" column/,
  async function (this: World) {
    removeIssue = new removeIssuePage(this.driver);
    await removeIssue.selectIssue();
  }
);
When(/^Users select More button/, async function (this: World) {
  removeIssue = new removeIssuePage(this.driver);
  await removeIssue.selectMoreBtn();
});
When(/^Users select Delete Item/, async function (this: World) {
  removeIssue = new removeIssuePage(this.driver);
  await removeIssue.selectDeleteItem();
});
When(
  /^Users select Delete button in the message box/,
  async function (this: World) {
    removeIssue = new removeIssuePage(this.driver);
    await removeIssue.selectDeleteBtn();
  }
);
Then(
  /^The issue "using Xpath" is not display in "TO DO" column/,
  async function (this: World) {
    removeIssue = new removeIssuePage(this.driver);
    await removeIssue.issueIsNotDisplays();
  }
);
