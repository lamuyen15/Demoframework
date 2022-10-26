import {  World } from "cucumber";
import {  before, binding, given, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { ProjectCreatePage } from "../page/create_project";
import { Login } from "../page/login";
import { Projects } from "../page/projects";
import { ProjectTemplatesPage } from "../page/project_template";

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

  @when(/^User click on Jira Software/)
  public async userOpenJiraSoftwareBtn() {
    let project = new Projects(driver);
    await project.openJiraSoftware();
  }
  @when(/^Click on Project/)
  public async userOpenProjectFromHeader() {
    let project = new Projects(driver);
    await project.openHeaderMenu("Projects");
  }
  @when(/^Create Project via the navigation bar on project list page/)
  public async userCreateProject() {
    let project = new Projects(driver);
    await project.clickCreateProjectFromHeader();
  }

  @when(/^Click Software Development on Projects template page/)
  public async openSoftwareDevelopmentSectionOnTemplatePage() {
    let project = new ProjectTemplatesPage(driver);
    await project.openLeftMenu("Software development");
  }

  @when(/^Click on Scrum template and Use template button/)
  public async chooseTemplate() {
    let projectTemplatePage = new ProjectTemplatesPage(driver);
    await projectTemplatePage.clickScrumTemplate();
  }

  @when(/^Select a team-managed project button/)
  public async chooseProjectTypes() {
    let projectTemplatePage = new ProjectTemplatesPage(driver);
    await projectTemplatePage.openNewProjectTypeByTemplate();
  }

  @when(/^User enter the name of project "([^"]*)"/)
  public async setNameProject(this: World, name: string) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.setNameProject(name);
  }

  @when(/^User choose Open on the Access dropdown list/)
  public async userChooseOpenOption(this: World) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.chooseAccess();
  }

  @when(/^User click on the Create project button/)
  public async userClickCreateProjectBtn(this: World) {
    let createProjectPage = new ProjectCreatePage(driver);
    await createProjectPage.clickCreateProjectBtn();
  }
}
