import assert from "assert";
import { Before, BeforeAll, World, Given, When, Then } from "cucumber";

import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { ProjectCreatePage } from "../page/create_project.page";
import { Login } from "../page/login.page";
import { NewProjectPage } from "../page/new_project.page";
import { Projects } from "../page/projects.page";
import { ProjectTemplatesPage } from "../page/project_template.page";

// var { setDefaultTimeout } = require("cucumber");
// setDefaultTimeout(60 * 1000);

let driver: WebDriver;

BeforeAll(async function () {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get(Constants.LOGIN_URL);
  let loginPage = new Login(driver);
  await loginPage.setUserName(Constants.DEFAULT_USR);
  await loginPage.setUserPassword(Constants.DEFAULT_PASSWORD);
});

Before(async function (this: World) {
  if (!this.driver) {
    this.driver = driver;
  }
});

Given(/^User is on start page/, async function (this: World) {
  let project = new Projects(driver);
  console.log("Wait for projects page displayed");
  await project.waitForProjectsPageDisplayed();
});

When(/^User open on Jira Software/, async function (this: World) {
  let project = new Projects(driver);
  await project.openJiraSoftware();
  await driver.sleep(3000);
});

When(/^User select Project from header menu/, async function (this: World) {
  let project = new Projects(driver);
  await project.openHeaderMenu("Projects");
});

When(
  /^User select Create Project via the navigation bar on project list page/,
  async function (this: World) {
    let project = new Projects(driver);
    await project.clickCreateProjectFromHeader();
  }
);

When(
  /^User open Software Development on Projects template page/,
  async function (this: World) {
    let project = new ProjectTemplatesPage(driver);
    await project.openLeftMenu("Software development");
  }
);

When(
  /^User select Scrum template and Use template button/,
  async function (this: World) {
    let projectTemplatePage = new ProjectTemplatesPage(driver);
    await projectTemplatePage.clickScrumTemplate();
  }
);

When(
  /^User select a team-managed project button/,
  async function (this: World) {
    let projectTemplatePage = new ProjectTemplatesPage(driver);
    await projectTemplatePage.openNewProjectTypeByTemplate();
  }
);

When(
  /^User create project with name "([^"]*)"/,
  async function (this: World, name: string) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.setNameProject(name);
  }
);

When(
  /^User choose Open on the Access dropdown list/,
  async function (this: World) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.chooseAccess();
  }
);

When(
  /^User select the Create project button on the bottom of the project create page/,
  async function (this: World) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.clickCreateProjectBtn();
  }
);

Then(/New project "demoproject10" displays/, async function (this: World) {
  let projectPage = new NewProjectPage(driver);
  let isOnNewProjectPage = await projectPage.isAt();
  assert.equal(isOnNewProjectPage, true);
});
