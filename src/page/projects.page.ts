import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "./seleniumWebdriverWrapper";

export class Projects extends SeleniumWebdriverWrapper {
  // elements for project page
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  JiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  clickCreateProject = By.xpath(
    `//div[@role='group']//button[contains(.,'Create project')]`
  );

  constructor(driver: WebDriver) {
    super(driver);
  }

  // method for project page
  public async waitForProjectsPageDisplayed() {
    await this.waitUntilElementLoadedAndDisplayed(this.showProductBtn);
  }

  // method for project page
  public async openShowAllProducts() {
    await this.driver.findElement(this.showProductBtn).click();
  }

  public async openJiraSoftware() {
    await this.driver.findElement(this.JiraSoftwareBtn).click();
  }

  public async openHeaderMenu(header: String) {
    switch (header) {
      case "Project":
        await this.driver.findElement(this.projectTopHeaderBtn).click();
        break;
      default:
        break;
    }
  }

  public async clickCreateProjectFromHeader() {
    await this.openHeaderMenu("Project");
    await this.driver.findElement(this.clickCreateProject).click();
    await this.driver.sleep(10000);
  }
}
