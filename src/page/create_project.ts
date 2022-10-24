import { By, until, WebDriver } from "selenium-webdriver";

export class ProjectCreatePage {
  driver: WebDriver;

  showProductBtn = By.xpath(`//button[.='Show all products']`);
  clickJiraSoftwarebtn = By.xpath(
    `//a[@href='https://uyenautotraining.atlassian.net/wiki']`
  );

  projectNameField = By.xpath(
    `//input[@id='project-create.create-form.name-field.input']`
  );
  accessField = By.xpath(`//button[contains(@data-testid,'project-access')]`);
  clickOpen = By.xpath(
    ` //div[text()='Open']//ancestor::span[@role='menuitem' ]`
  );
  clickCreateProjectbtn = By.xpath(
    `//div[contains(@data-test-id,'submit-button')]//button`
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async showAllProduct() {
    await this.driver.findElement(this.showAllProduct).click();
  }

  public async clickJiraSoftwareButton() {
    await this.driver.findElement(this.clickJiraSoftwarebtn).click();
  }

  public async clickCreateProjectFromJiraProductList() {
    await this.clickJiraSoftwareButton();
  }

  public async setProjectName(projectName: string) {
    await this.driver.findElement(this.projectNameField).sendKeys(projectName);
    await this.driver.findElement(this.accessField).click();
    await this.driver.findElement(this.accessField).click();
    await this.driver.findElement(this.clickOpen).click();
  }

  public async clickCreateProjecButton() {
    await this.driver.findElement(this.clickCreateProjectbtn).click();
    await this.driver.sleep(5000);
  }
}
