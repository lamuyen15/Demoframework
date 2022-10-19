/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { By, WebDriver } from "selenium-webdriver";

let driver: WebDriver;

export class loginPage {
  async goToPage() {
    await driver.get(
      "https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Ajira%253A%253Asite%252F1baf8199-cfe5-4cc5-979c-08d2b68ffcc9%26continue%3Dhttps%253A%252F%252Fuyenautotraining.atlassian.net&application=jira"
    );
  }

  async setUserName(username: string) {
    await driver
      .findElement(By.xpath(`//input[@id="username"]//parent::div`))
      .sendKeys(username);
  }

  async clickContinueBtn() {
    await driver.findElement(By.xpath(`//button[@id='login-submit']`)).click();
  }
  async setpassword(password: string) {
    await driver
      .findElement(By.xpath(`//input[@id="password"]//parent::div`))
      .sendKeys(password);
  }
  async clickLoginBtn() {
    await driver.findElement(By.xpath(`//button[@id="login-submit"]`)).click();
  }
}
