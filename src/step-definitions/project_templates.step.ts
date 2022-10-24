import { binding, given, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { ProjectCreatePage } from "../page/create_project";
import { Projects } from "../page/projects";
import { ProjectTemplatesPage } from "../page/project_template";

@binding()
export class ProjectTemplates {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  @when(
    /Click on Scrum template,Use template button and Select a team-managed project/
  )
  public async chooseTemplate() {
    let projectTemplatesPage = new ProjectTemplatesPage(this.driver);
    await projectTemplatesPage.clickScrumTemplate();
    await projectTemplatesPage.openNewProjectTypeByTemplate();
    // TODO: Select a team-managed project
  }
}
