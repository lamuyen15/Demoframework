import { By, until, WebDriver } from "selenium-webdriver";

export class Projects {
  driver: WebDriver;

  showProductBtn = By.xpath(`//button[.='Show all products']`);
  JiraSoftwareBtn = By.xpath(
    `//a[@href='https://uyenautotraining.atlassian.net/wiki']`
  );
  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  clickCreateProject = By.xpath(
    `//div[@role='group']//button[contains(.,'Create project')]`
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

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
  }
}
