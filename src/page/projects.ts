import { By, until, WebDriver } from "selenium-webdriver";

export class Projects {
  driver: WebDriver;
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  clickJiraSoftwarebtn = By.xpath(
    `//a[@href='https://uyenautotraining.atlassian.net/wiki']`
  );
  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  clickCreateProject = By.xpath(
    `//div[@role='group']//button[contains(.,'Create project')]`
  );

  clickCreateProjectbtn = By.xpath(
    `//div[contains(@data-test-id,'submit-button')]//button`
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
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

  // public async setProjectName(projectName: string) {
  //   await this.driver.findElement(this.projectNameField).sendKeys(projectName);
  //   await this.driver.findElement(this.accessField).click();
  //   await this.driver.findElement(this.accessField).click();
  //   await this.driver.findElement(this.clickOpen).click();
  // }

  // public async clickCreateProjecButton() {
  //   await this.driver.findElement(this.clickCreateProjectbtn).click();
  //   await this.driver.sleep(5000);
  // }
}
