import { Before, World } from "cucumber";
import { and, before, binding, given, when } from "cucumber-tsflow/dist";
import { Builder } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { ProjectCreatePage } from "../page/create_project";
import { Login } from "../page/login";

let driver;

@binding()
export class createNewProject {
  @when(/^Create Project on project template/)
  public async userCreateProject() {
    // let project = new ProjectCreatePage(driver);
    // await project.clickCreateProjectFromHeader();
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
