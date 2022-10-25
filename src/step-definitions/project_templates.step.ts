import { World } from "cucumber";
import { binding, given, when } from "cucumber-tsflow/dist";
import { ProjectTemplatesPage } from "../page/project_template";
import { WebDriver } from "selenium-webdriver";
import { ProjectCreatePage } from "../page/create_project";

let driver: WebDriver;

@binding()
export class ProjectTemplates {
  @given(/^User is on Projects template page/)
  public async userCreateProject() {
    let project = new ProjectCreatePage(driver);
    await project.clickCreateProjectFromHeader();
    return;
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
