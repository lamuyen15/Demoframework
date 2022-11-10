import { Given, Then, When, World } from "cucumber";
import { createTeamPage } from "../../page/user_module_page/create_team.page";

let createTeam: createTeamPage;
Given(/^User select JiraSoftware page/, async function (this: World) {
  createTeam = new createTeamPage(this.driver);
  await createTeam.selectJira();
});
When(/^User More button from Header/, async function (this: World) {
  createTeam = new createTeamPage(this.driver);
  await createTeam.selectMore();
});
When(/^User open People Item/, async function (this: World) {
  createTeam = new createTeamPage(this.driver);
  await createTeam.selectPeopleItem();
});
When(/^User select "Create team"/, async function (this: World) {
  createTeam = new createTeamPage(this.driver);
  await createTeam.selectCreateTeam();
});
When(
  /^User enter "([^"]*)" into team name field/,
  async function (this: World, nameTeam: string) {
    createTeam = new createTeamPage(this.driver);
    await createTeam.enterNameTeam(nameTeam);
  }
);
When(
  /^User enter name "([^"]*)" into Invite People field/,
  async function (this: World, userAddress: string) {
    createTeam = new createTeamPage(this.driver);
    await createTeam.enterUserInvited(userAddress);
  }
);
When(
  /^User click "Tien Tran" on the dropdown list/,
  async function (this: World) {
    createTeam = new createTeamPage(this.driver);
    await createTeam.selectUser();
  }
);
Then(/^The message about "Team project 1" is created successfully/, async function (this: World) {
  createTeam = new createTeamPage(this.driver);
  await createTeam.messageCreatedTeamDisplays();
});
