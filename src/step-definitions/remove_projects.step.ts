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

When(/^User select Move button on the message box/,async function(this:World){
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.selectMoveBtn();
}
);

When(/^User choose Go to Trash on the message box/,async function(this:World){
  let removeProject = new RemoveProjectPage(this.driver);
  await removeProject.selectGoToTrash();
}
);

When(/^User choose More button of project "Project_3" on the record of result on the Trash page/,async function(this:World){
  let removeProject = new RemoveProjectPage(this.driver);
  await removeProject.selectMoreBtnOnTrashPage();
}
);

// @then(/^The message box displays/)
// public async isUserOnNewProjectPage(this: World) {
//     let projectPage = new NewProjectPage(driver);
//     let isOnNewProjectPage = await projectPage.isAt();
//     assert.equal(isOnNewProjectPage, true);
//   }
