import { World } from "cucumber";
import { and, binding, when } from "cucumber-tsflow/dist";
import { WebDriver } from "selenium-webdriver";
import { Projects } from "../page/projects";

@binding()
export class Project {
  @when(/^User click on Jira Software/)
  public async userOpenJiraSoftwareBtn(this: World) {
    let project = new Projects(this.driver);
    await project.openShowAllProducts();
    await project.openJiraSoftware();
  }
  @when(/^Click on Project/)
  public async userOpenProjectFromHeader(this: World, header: string) {
    let project = new Projects(this.driver);
    await project.openHeaderMenu(header);
  }
  @when(/^Create Project on the navigation bar/)
  public async userCreateProject(this: World) {
    let project = new Projects(this.driver);
    await project.clickCreateProjectFromHeader();
  }
}
