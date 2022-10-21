import { binding, given, then, when } from "cucumber-tsflow";
import { Builder, WebDriver } from "selenium-webdriver";
import { Login } from "../page/login";
import { Home } from "../page/home";
import assert from "assert";
require("chromedriver");

let driver: WebDriver;
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

@binding()
export class LoginAccountSteps {
  @given(/Go to page Jira "([^"]*)"/)
  public async navigateToWebsite(url: string) {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get(`${url}`);
  }

  @when(/User enter "([^"]*)" and click continue button/)
  public async giveUserNameLogin(userName: string) {
    let loginPage = new Login(driver);
    await loginPage.setUserName(userName);
  }

  @when(/User enter "([^"]*)" and click log in button/)
  public async giveUserPasswordLogin(userPassword: string) {
    let loginPage = new Login(driver);
    await loginPage.setUserPassword(userPassword);
  }

  @then(/User enter your work page/)
  public async isUserOnWorkPage() {
    let homePage = new Home(driver);
    let isOnHomePage = await homePage.isAt();
    assert.equal(isOnHomePage, true);
  }
}
