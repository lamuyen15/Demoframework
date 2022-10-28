import { binding, given, then, when } from "cucumber-tsflow";
import { Builder, WebDriver } from "selenium-webdriver";
import { Login } from "../page/login.page";
import { Home } from "../page/home.page";
import assert from "assert";
import { World } from "cucumber";

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

@binding()
export class LoginAccountSteps {
  @given(/^Go to page Jira "([^"]*)"/)
  public async navigateToWebsite(this: World, url: string) {
    this.driver = new Builder().forBrowser("chrome").build();
    await this.driver.get(`${url}`);
  }

  @when(/^User enter "([^"]*)" and click continue button/)
  public async giveUserNameLogin(this: World, userName: string) {
    let loginPage = new Login(this.driver);
    await loginPage.setUserName(userName);
  }

  @when(/^User enter "([^"]*)" and click log in button/)
  public async giveUserPasswordLogin(this: World, userPassword: string) {
    let loginPage = new Login(this.driver);
    await loginPage.setUserPassword(userPassword);
  }

  @then(/^User enter your work page/)
  public async isUserOnWorkPage(this: World) {
    let homePage = new Home(this.driver);
    let isOnHomePage = await homePage.isAt();
    assert.equal(isOnHomePage, true);
  }
}
