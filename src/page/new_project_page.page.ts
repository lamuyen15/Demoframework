import { By, WebDriver } from "selenium-webdriver";
import { World } from "cucumber";
export class NewProjectPage {
  driver: WebDriver;

  projectName = By.xpath(`//h2[text()='demoproject10']`);

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  /**
   * Determine whether we're on Login Page or not.
   * Return: True if Login page with profile button is displayed. Otherwise, return False
   */
  public async isAt() {
    return this.driver.findElement(this.projectName).isDisplayed();
  }
}
