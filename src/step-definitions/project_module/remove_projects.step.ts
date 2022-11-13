import { WebDriver } from "selenium-webdriver";
import { Given, Then, When, World } from "cucumber";
import { RemoveProjectPage } from "../../page/project_module_page/remove_project.page";
import assert from "assert";

let driver: WebDriver;
let removeProject: RemoveProjectPage;

Given(/^User select Jira page/, async function (this: World) {
  removeProject = new RemoveProjectPage(this.driver);
  await removeProject.isAtJiraSoftwarePage();
});

When(/^User select Project button/, async function (this: World) {
  removeProject = new RemoveProjectPage(this.driver);
  await removeProject.openProjectFromHeader();
});

When(
  /^User select View All Projects via the navigation bar on project list page/,
  async function (this: World) {
    removeProject = new RemoveProjectPage(this.driver);
    await removeProject.openViewAllProject();
  }
);

When(
  /^User select More button of project "Project_3" on the record of result/,
  async function (this: World) {
    removeProject = new RemoveProjectPage(this.driver);
    await removeProject.openMoreBtn();
  }
);

When(
  /^User choose Move to trash from dropdown list/,
  async function (this: World) {
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.openMoveToTrash();
  }
);

When(
  /^User select Move button on the message box/,
  async function (this: World) {
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.selectMoveBtn();
  }
);

When(
  /^User choose Go to Trash on the message box/,
  async function (this: World) {
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.selectGoToTrash();
  }
);

When(
  /^User choose More button of project "Project_3" on the record of result on the Trash page/,
  async function (this: World) {
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.selectMoreBtnOnTrashPage();
  }
);

When(
  /^User select Delete permanently on the dropdown list/,
  async function (this: World) {
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.selectDelete();
  }
);

When(
  /^User choose Delete button on the message box/,
  async function (this: World) {
    let removeProject = new RemoveProjectPage(this.driver);
    await removeProject.clickDeleteBtn();
  }
);

Then(
  /^The message about remove project displays/,
  async function (this: World) {
    removeProject = new RemoveProjectPage(this.driver);
    let isRemoveProject = await removeProject.messageDisplay();
    assert.equal(isRemoveProject, true);
  }
);
