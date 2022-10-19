
/* eslint-disable semi */
/* eslint-disable quotes */
import { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } from "cucumber";
import { Builder, Key, until, WebDriver } from "selenium-webdriver";
import { loginPage } from '../page-objects/LoginPage';
let driver: WebDriver; 

export class loginstep
{

// @BeforeAll (async () => {
//   setDefaultTimeout(10000)
//   driver = await new Builder().forBrowser('chrome').build()
// })

// AfterAll(async () => {
//   await driver.quit()
// })

Given ("I am on Jira page") 
  return loginPage.goToPage(); 

// When('I enter Email Address{string}', async () => {

// })

// When('I click on Continue button', async () => {

// })

// When('I enter Password{string}', async () => {

// })

// Then('I click on login button', async () => {

// })
