/* eslint-disable arrow-spacing */
/* eslint-disable func-call-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable space-before-function-paren */
import {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "cucumber";
import { Builder, By, Key, until, WebDriver } from "selenium-webdriver";

let driver: WebDriver;

BeforeAll(async () => {
  setDefaultTimeout(10000);
  driver = await new Builder().forBrowser("chrome").build();
});

AfterAll(async () => {
  await driver.quit();
});

Given("I am on Jira page", async () => {
  await driver.get(
    "https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Ajira%253A%253Asite%252F1baf8199-cfe5-4cc5-979c-08d2b68ffcc9%26continue%3Dhttps%253A%252F%252Fuyenautotraining.atlassian.net&application=jira"
  );
});

When("I enter Email Address{string}", async (username: string) => {
  const emailInput = await driver.findElement(
    By.xpath(' //input[@id="username"]//parent::div')
  );
  await emailInput.sendKeys(username, Key.RETURN);
  await driver.wait(until.stalenessOf(emailInput));
});

When("I click on Continue button", async () => {
  const Continuebtn = await driver.findElement(
    By.xpath('//button[@id="login-submit"])')
  );
  await Continuebtn.click();
});

When("I enter Password{string}", async (password: string) => {
  const passwordInput = await driver.findElement(
    By.xpath(' //input[@id="password"]//parent::div')
  );
  await passwordInput.sendKeys(password, Key.RETURN);
  await driver.wait(until.stalenessOf(passwordInput));
});

Then("I click on login button", async () => {
  const Loginbtn = await driver.findElement(
    By.xpath('//button[@id="login-submit"]')
  );
  await Loginbtn.click();
});
