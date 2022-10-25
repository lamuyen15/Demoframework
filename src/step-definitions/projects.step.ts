import { World } from "cucumber";
import { and, before, binding, given, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { Login } from "../page/login";
import { Projects } from "../page/projects";

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
}
