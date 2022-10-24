import { binding, given, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { ProjectCreatePage } from "../page/create_project";
import { Projects } from "../page/projects";
import { ProjectTemplatesPage } from "../page/project_template";

@binding()
export class createNewProject {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  @when(
    /^User click on Jira Software and click on Project and Create Project on the navigation bar/
  )
  public async userCreateNewProject() {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.showAllProduct();
    await createProjectPage.clickJiraSoftwareButton();

    let projectListPage = new Projects(this.driver);
    await projectListPage.clickCreateProjectFromHeader();
  }

  @when(/User enter "([^"]*)" and choose Open on the Acess dropdown list/)
  public async setNameProject(name: string) {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.setProjectName(name);
  }

  @when(/User click on the Create project button/)
  public async clickBtnCreateProject() {
    let createProjectPage = new ProjectCreatePage(this.driver);
    await createProjectPage.clickCreateProjecButton();
  }
}
