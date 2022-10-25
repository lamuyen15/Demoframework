import { World } from "cucumber";
import { and, binding, given, when } from "cucumber-tsflow/dist";
import { ProjectCreatePage } from "../page/create_project";

@binding()
export class createNewProject {
  @when(/^User enter the name of project "([^"]*)"/)
  public async setNameProject(this: World, name: string) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.setNameProject(name);
  }

  @when(/^User choose Open on the Access dropdown list/)
  public async userChooseOpenOption(this: World,) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.chooseAccess();
  }

  @when(/^User click on the Create project button/)
  public async userClickCreateProjectBtn(this: World,) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.clickCreateProjectBtn();
  }
  // function And(arg0: RegExp) {
  //   throw new Error("Function not implemented.");
  // }
}
