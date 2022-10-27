import assert from "assert";
import {  World } from "cucumber";
import {  before, binding, given, then, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { ProjectCreatePage } from "../page/create_project.page";
import { Login } from "../page/login";
import { NewProjectPage } from "../page/new_project_page.page";
import { Projects } from "../page/projects.page";
import { ProjectTemplatesPage } from "../page/project_template.page";

// var { setDefaultTimeout } = require("cucumber");
// setDefaultTimeout(60 * 1000);

let driver: WebDriver;

@binding()
export class Project {
  @before()
  public async initLogin() {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get(Constants.LOGIN_URL);
    let loginPage = new Login(driver);
    await loginPage.setUserName(Constants.DEFAULT_USR);
    await loginPage.setUserPassword(Constants.DEFAULT_PASSWORD);
  }

  @given(/^User is on start page/)
  public async userIsOnStartPage() {
    return;
  }

  @when(/^User open on Jira Software/)
  public async userOpenJiraSoftwareBtn() {
    let project = new Projects(driver);
    await project.openJiraSoftware();
  }
  @when(/^User select Project from header menu/)
  public async userOpenProjectFromHeader() {
    let project = new Projects(driver);
    await project.openHeaderMenu("Projects");
  }
  @when(/^User select Create Project via the navigation bar on project list page/)
  public async userCreateProject() {
    let project = new Projects(driver);
    await project.clickCreateProjectFromHeader();
  }

  @when(/^User open Software Development on Projects template page/)
  public async openSoftwareDevelopmentSectionOnTemplatePage() {
    let project = new ProjectTemplatesPage(driver);
    await project.openLeftMenu("Software development");
  }

  @when(/^User select Scrum template and Use template button/)
  public async chooseTemplate() {
    let projectTemplatePage = new ProjectTemplatesPage(driver);
    await projectTemplatePage.clickScrumTemplate();
  }

  @when(/^User select a team-managed project button/)
  public async chooseProjectTypes() {
    let projectTemplatePage = new ProjectTemplatesPage(driver);
    await projectTemplatePage.openNewProjectTypeByTemplate();
  }

  @when(/^User create project with name "([^"]*)"/)
  public async setNameProject(this: World, name: string) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.setNameProject(name);
  }

  @when(/^User choose Open on the Access dropdown list/)
  public async userChooseOpenOption(this: World) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.chooseAccess();
  }

  @when(/^User select the Create project button on the bottom of the project create page/)
  public async userClickCreateProjectBtn(this: World) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.clickCreateProjectBtn();
  }
  @then(/New project "demoproject10" displays/)
  public async isUserOnNewProjectPage(this:World) {
    let projectPage = new NewProjectPage(driver);
    let isOnNewProjectPage = await projectPage.isAt();
    assert.equal(isOnNewProjectPage, true);
  }
}
