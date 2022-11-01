import { Before, BeforeAll, Given, When, World } from "cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { Login } from "../page/login.page";
import { recentProjectPage } from "../page/open_recent_project.page";


let driver: WebDriver;
BeforeAll(async function () {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get(Constants.LOGIN_URL);
    let loginPage = new Login(driver);
    await loginPage.setUserName(Constants.DEFAULT_USR);
    await loginPage.setUserPassword(Constants.DEFAULT_PASSWORD);
  });
  
  Before(async function (this: World) {
    if (!this.driver) {
      this.driver = driver;
    }
  });

  Given(/^User is on Jira Software page/, async function (this: World) {
    let recentProject = new recentProjectPage(driver);
    await recentProject.selectShowAllProducts();
    await recentProject.selectJiraSoftware();
    
  });