import { Given, Then, When, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { addPeoPleProjectPage } from "../../page/project_module_page/access.page";
import assert from "assert";

let driver: WebDriver;
let addPeopleProject: addPeoPleProjectPage;

Given(/^User select Jira Software page/, async function (this: World) {
  addPeopleProject = new addPeoPleProjectPage(this.driver);
  await addPeopleProject.clickJira();
});
When(/^User is on Project page/, async function (this: World) {
  addPeopleProject = new addPeoPleProjectPage(this.driver);
  await addPeopleProject.isOnProjectPage();
});

When(
  /^User select "practice-projectTS" on the record of the result/,
  async function (this: World) {
    addPeopleProject = new addPeoPleProjectPage(this.driver);
    await addPeopleProject.selectProject();
  }
);
When(
  /^User select Project Setting on the left of navigation bar/,
  async function (this: World) {
    addPeopleProject = new addPeoPleProjectPage(this.driver);
    await addPeopleProject.selectProjectSetting();
  }
);

When(
  /^User choose Access Item on the left of navigation bar/,
  async function (this: World) {
    addPeopleProject = new addPeoPleProjectPage(this.driver);
    await addPeopleProject.selectAccess();
  }
);

When(
  /^User select Add people button on the right of top page/,
  async function (this: World) {
    addPeopleProject = new addPeoPleProjectPage(this.driver);
    await addPeopleProject.selectAddPeopleBtn();
  }
);

When(
  /^User enter people with name "hung.phan@evizi.com"/,
  async function (this: World) {
    addPeopleProject = new addPeoPleProjectPage(this.driver);
    await addPeopleProject.waitForAddressFieldDisplayed();
    await addPeopleProject.setName();
  }
);

When(/^User select Add button/, async function (this: World) {
  addPeopleProject = new addPeoPleProjectPage(this.driver);
  await addPeopleProject.selectAddBtn();
});

Then(
  /^The new person "Hung Phan Hai Dao" displays/,
  async function (this: World) {
    addPeopleProject = new addPeoPleProjectPage(this.driver);
    let personDisplays = await addPeopleProject.newPersonDisplays();
    assert.equal(personDisplays, true);
  }
);
