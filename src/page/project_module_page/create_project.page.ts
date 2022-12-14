import { By, WebDriver } from "selenium-webdriver";

export class ProjectCreatePage {
  driver: WebDriver;
// elements for create project
  projectNameField = By.xpath(
    `//input[@id='project-create.create-form.name-field.input']`
  );
  accessField = By.xpath(`//button[contains(@data-testid,'project-access')]`);
  optionItem = By.xpath(
    ` //div[text()='Open']//ancestor::span[@role='menuitem' ]`
  );
  createProjectBtn = By.xpath(
    `//div[contains(@data-test-id,'submit-button')]//button`
  );
 

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

//method for create project page
  public async setNameProject(nameProject:string){
    await this.driver.findElement(this.projectNameField).sendKeys(nameProject);
    await this.driver.sleep(2000);

  }

  public async clickCreateProjectBtn(){
    await this.driver.findElement(this.createProjectBtn).click();
   
  }

}
