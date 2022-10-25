import { World } from "cucumber";
import { binding, given, when } from "cucumber-tsflow/dist";
import { ProjectTemplatesPage } from "../page/project_template";
import { WebDriver } from "selenium-webdriver";
import { Projects } from "../page/projects";

let driver: WebDriver;

@binding()
export class ProjectTemplates {
  @when(/^User is on Projects template page/)
  public async userCreateProject() {
    // let project = new ProjectTemplatesPage(driver);
    // await project.openLeftMenu("Software development");
    // let projects = new Projects(driver);
    // await projects.clickCreateProjectFromHeader();
    
    // return;
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
}
