import { Given, When, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";

let driver: WebDriver;
let addPeopleProject: addPeoPleProjectPage;

Given(/^User is on Project page/, async function (this: World) {
  addPeopleProject = new addPeopleProject(this.driver);
  await addPeopleProject.isOnProjectPage();
});

When(
  /^User select "practice-projectTS" on the record of the result/,
  async function (this: World) {
    addPeopleProject = new addPeopleProject(this.driver);
    await addPeopleProject.selectProject();
  }
);

When(
  /^User choose Access Item on the left of navigation bar/,
  async function (this: World) {
    addPeopleProject = new addPeopleProject(this.driver);
    await addPeopleProject.selectAccess();
  }
);

When(
  /^User select Add people button on the right of top page/,
  async function (this: World) {
    addPeopleProject = new addPeopleProject(this.driver);
    await addPeopleProject.selectAddPeopleBtn();
  }
);

When(
  /^User enter people with name "([^"]*)"/,
  async function (this: World, name: string) {
    addPeopleProject = new addPeopleProject(this.driver);
    await addPeopleProject.setName(name);
  }
);

When(
  /^User choose Administrator on the Role dropdown list/,
  async function (this: World) {
    addPeopleProject = new addPeopleProject(this.driver);
    await addPeopleProject.selectAdministrator();
  }
);

When(/^User select Add button/, async function (this: World) {
  addPeopleProject = new addPeopleProject(this.driver);
  await addPeopleProject.selectAddBtn();
});
