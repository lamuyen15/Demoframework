import { Before, World } from "cucumber";
import { and, before, binding, given, when } from "cucumber-tsflow/dist";
import { Builder } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { ProjectCreatePage } from "../page/create_project";
import { Login } from "../page/login";

let driver;

@binding()
export class createNewProject {
  @before()
  public async initLogin() {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get(Constants.LOGIN_URL);
    let loginPage = new Login(driver);
    await loginPage.setUserName(Constants.DEFAULT_USR);
    await loginPage.setUserPassword(Constants.DEFAULT_PASSWORD);
  }

  @when(/^User enter the name of project "([^"]*)"/)
  public async setNameProject(this: World, name: string) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.setNameProject(name);
  }

  @when(/^User choose Open on the Access dropdown list/)
  public async userChooseOpenOption(this: World) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.chooseAccess();
  }

  @when(/^User click on the Create project button/)
  public async userClickCreateProjectBtn(this: World) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.clickCreateProjectBtn();
  }
  // function And(arg0: RegExp) {
  //   throw new Error("Function not implemented.");
  // }
}
