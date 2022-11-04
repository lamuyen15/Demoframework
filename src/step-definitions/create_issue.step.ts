import { Given, When, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";

let driver: WebDriver;

Given(/^User is on Jira start page/, async function (this: World) {
  let createIssue = new createIssuePage(driver);
  await createIssue.openJiraPage();
});

When(/^User click on Projects/, async function (this: World) {
  let createIssue = new createIssuePage(driver);
  await createIssue.openProject();
});

When(/^User select View All Projects Item/, async function (this: World) {
  let createIssue = new createIssuePage(driver);
  await createIssue.openViewAll();
});
When(
  /^User select projectTS-practice on the record/,
  async function (this: World) {
    let createIssue = new createIssuePage(driver);
    await createIssue.openProject();
  }
);
When(
  /^User click on the  "+ Create Issue" at "TO DO" column/,
  async function (this: World) {
    let createIssue = new createIssuePage(driver);
    await createIssue.openCreateIssueField();
  }
);
When(/^User enter "([^"]*)"/, async function (this: World, nameIssue: string) {
  let createIssue = new createIssuePage(driver);
  await createIssue.openCreateIssueField(nameIssue);
});
When (/^User Press keyboard Enter/,async function(this:World){
    let createIssue = new createIssuePage(driver);
    await createIssue.pressKeyBoard();
})  
Then ()