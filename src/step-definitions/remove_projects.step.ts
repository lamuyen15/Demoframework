import assert from 'assert';
import { World } from 'cucumber';
import { binding, given, then, when } from 'cucumber-tsflow/dist';
import { WebDriver } from 'selenium-webdriver';
import { RemoveProjectPage } from '../page/remove_project.page';
let driver: WebDriver;

@binding()
export class RemoveProject
{
@given(/^User is on Jira Software page/)
public async isOnJiraSoftwarePage(){
    let removeProject = new RemoveProjectPage(driver);
    await removeProject.openJiraSoftware();
}
@when(/^User select View All Projects from Project button/)
public async userOpenProjectFromHeader() {
    await removeProject.openHeaderMenu("Projects");
    await removeProject.openViewAllProjects();
  }
@when(/^User select More button of project "([^"]*)" on the record of result/)
public async selectMoreBtn(this: World, name: string) {
    await removeProject.setNameProject(name);
}
@when(/^User choose Move to trash from dropdown list/)
public async selectMoveToTrash(){
    await removeProject.clickMoveToTrash();
}
@when(/^User select Move button on the message box/)
public async selectMoveBtn(){
    await removeProject.clickMoveBtn();
}
@then(/^The message box displays/)
public async isUserOnNewProjectPage(this: World) {
    let projectPage = new NewProjectPage(driver);
    let isOnNewProjectPage = await projectPage.isAt();
    assert.equal(isOnNewProjectPage, true);
  }

}