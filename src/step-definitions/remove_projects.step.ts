import { WebDriver } from "selenium-webdriver";
import { Given, When, World } from "cucumber";
import { RemoveProjectPage } from "../page/remove_project.page";

let driver: WebDriver;
let removeProject: RemoveProjectPage;

Given(/^User is on Project created/, async function (this: World) {
  removeProject = new RemoveProjectPage(this.driver);
  await removeProject.isAtProjectCreated();
});

When(/^User select Project button/,async function(this:World){
  removeProject = new RemoveProjectPage(this.driver);
  await removeProject.openProjectFromHeader();
});

When(/^User select View All Projects via the navigation bar on project list page/, async function(this:World){
  removeProject = new RemoveProjectPage(this.driver);
  await removeProject.openViewAllProject();
}
);

When(/^User select More button of project "Project_3" on the record of result/, async function(this:World){
  removeProject = new RemoveProjectPage(this.driver);
  await removeProject.openMoreBtn();
}
);

When(/^User choose Move to trash from dropdown list/, async function(this:World){
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.openMoveToTrash();
}
);

// @when(/^User select Move button on the message box/)
// public async selectMoveBtn(){
//     let removeProject = new RemoveProjectPage(driver);
//     await removeProject.selectMoveBtn();
// }
// @then(/^The message box displays/)
// public async isUserOnNewProjectPage(this: World) {
//     let projectPage = new NewProjectPage(driver);
//     let isOnNewProjectPage = await projectPage.isAt();
//     assert.equal(isOnNewProjectPage, true);
//   }