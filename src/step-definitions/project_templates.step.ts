import { World } from "cucumber";
import { binding, when } from "cucumber-tsflow/dist";
import { ProjectTemplatesPage } from "../page/project_template";

@binding()
export class ProjectTemplates {
  @when(/^Click on Scrum template and Use template button/)
  public async chooseTemplate(this: World) {
    let projectTemplatePage = new ProjectTemplatesPage(this.driver);
    await projectTemplatePage.clickScrumTemplate();
  }
  @when(/^Select a team-managed project button/)
  public async chooseProjectTypes(this: World) {
    let projectTemplatePage = new ProjectTemplatesPage(this.driver);
    await projectTemplatePage.openNewProjectTypeByTemplate();
  }
}
