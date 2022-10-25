import { World } from "cucumber";
import { and, before, binding, given, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { Login } from "../page/login";
import { Projects } from "../page/projects";

let driver : WebDriver;

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

  @given(/^User is on start page"/)
  public async userIsOnStartPage() {
    // TODO: prepare data
  }

  @when(/^User click on Jira Software/)
  public async userOpenJiraSoftwareBtn() {
    let project = new Projects(driver);
    await project.openShowAllProducts();
    await project.openJiraSoftware();
  }
  @when(/^Click on Project/)
  public async userOpenProjectFromHeader(header: string) {
    let project = new Projects(driver);
    await project.openHeaderMenu(header);
  }
  @when(/^Create Project on the navigation bar/)
  public async userCreateProject() {
    let project = new Projects(driver);
    await project.clickCreateProjectFromHeader();
  }
}
