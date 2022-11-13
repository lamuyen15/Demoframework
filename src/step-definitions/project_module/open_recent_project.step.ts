import { Given, Then, When, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { recentProjectPage } from "../../page/project_module_page/open_recent_project.page";
import assert from "assert";

let driver: WebDriver;
let recentProject: recentProjectPage;
Given(/^User is at Jira Software Page/, async function (this: World) {
  recentProject = new recentProjectPage(this.driver);
  await recentProject.clickJiraSoftwarePage();
});
When(/^User is on Projects page/, async function (this: World) {
  recentProject = new recentProjectPage(this.driver);
  await recentProject.clickRecentProjectFromHeader();
});
When(
  /^User select the recent project with name "Project1"/,
  async function (this: World) {
    recentProject = new recentProjectPage(this.driver);
    await recentProject.clickTheRecentProject();
  }
);
Then(/^User is on "Project1" page/, async function (this: World) {
  recentProject = new recentProjectPage(this.driver);
  let isRecentProject = await recentProject.theRecentProjectDisplay();
  assert.equal(isRecentProject, true);
});
