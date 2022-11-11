import { Given, Then, When, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { searchBoardPage } from "../../page/project_module_page/search_board_project.page";
let driver: WebDriver;
let searchBoard: searchBoardPage;
Given(/^User open Project page/, async function (this: World) {
  let searchBoard = new searchBoardPage(this.driver);
  await searchBoard.clickProject();
});

When(
  /^User select View All Projects on project list page/,
  async function (this: World) {
    searchBoard = new searchBoardPage(this.driver);
    await searchBoard.clickViewAllProjects();
  }
);

When(
  /^User choose "practice-projectTS" on the record of result/,
  async function (this: World) {
    searchBoard = new searchBoardPage(this.driver);
    await searchBoard.selectProjects();
  }
);

When(
  /^User enter "([^"]*)" into the search the board field/,
  async function (this: World, nameBoard: string) {
    searchBoard = new searchBoardPage(this.driver);
    await searchBoard.enterBoard(nameBoard);
  }
);

Then(/^The board "create 10-15TC" displays/, async function (this: World) {
  let searchBoard = new searchBoardPage(this.driver);
  await searchBoard.theBoardDisplay();
});
