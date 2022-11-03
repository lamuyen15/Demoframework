import {  Given, Then, When, World } from "cucumber";
import {WebDriver } from "selenium-webdriver";
import { recentProjectPage } from "../page/open_recent_project.page";


let driver: WebDriver;
let recentProject :recentProjectPage;
  Given(/^User is on Projects page/, async function (this: World) {
    recentProject = new recentProjectPage(this.driver);
    await recentProject.clickRecentProjectFromHeader();
  });
When(/^User select the recent project with name "demoproject10"/,async function(this:World){
  recentProject= new recentProjectPage(this.driver);
  await recentProject.clickTheRecentProject();
});
Then(/^User is on "demoproject10" page/,async function(this:World){
  recentProject=new recentProjectPage(this.driver);
  await recentProject.theRecentProjectDisplay();

});
