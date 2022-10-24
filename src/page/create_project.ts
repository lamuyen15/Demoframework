import { By, until, WebDriver } from "selenium-webdriver";

export class ProjectCreatePage {
  driver: WebDriver;

  projectNameField = By.xpath(
    `//input[@id='project-create.create-form.name-field.input']`
  );
  accessField = By.xpath(`//button[contains(@data-testid,'project-access')]`);
  openOption = By.xpath(
    ` //div[text()='Open']//ancestor::span[@role='menuitem' ]`
  );
  CreateProjectbtn = By.xpath(
    `//div[contains(@data-test-id,'submit-button')]//button`
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public






}
