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

// @when(/^User choose Move to trash from dropdown list/)
// public async selectMoveToTrash(){
//     let removeProject = new RemoveProjectPage(driver);
//     await removeProject.openMoveToTrash();
// }
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
