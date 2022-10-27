import { By, WebDriver } from "selenium-webdriver";
export class RemoveProjectPage {

  driver: WebDriver;

  //element for remove project page

  // projectName = By.xpath(`//h2[text()='demoproject10']`);
  showProductBtn = By.xpath(`//button[.='Show all products']`);

  JiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );
  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  clickViewAllProjects = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );
  selectMoreBtn = By.xpath(
    `//tr[contains(.,'PRJCT3')]//span[@role='img']//ancestor::button`
  );
  moveToTrashBtn = By.xpath(`//span[@role='menuitem']//parent::div`);
  clickMoveBtn = By.xpath(
    ` //span[text()='Move']//ancestor::button[contains(@data-test-id, 'move-to-trash-button')]`
  );
  messageMoveProjectSuccessfully = By.xpath(`//div[@role='alert']`);

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  //method for remove project
  // public async isAtProjectCreated() {
  //   await this.driver.findElement(this.projectName).isDisplayed();
  // }

  public async openShowAllProduct() {
    await this.driver.findElement(this.showProductBtn).click();
  }

  public async openJiraSoftwarePage() {
    await this.driver.findElement(this.JiraSoftwareBtn).click();
  }

  public async openProjectFromHeader(){
    await this.driver.findElement(this.projectTopHeaderBtn).click();
  }

  public async openViewAllProject() {
    await this.driver.findElement(this.clickViewAllProjects).click();
  }

  public async openMoveToTrash() {
    await this.driver.findElement(this.selectMoreBtn).click();
    await this.driver.findElement(this.moveToTrashBtn).click();
  }
  public async selectMoveBtn() {
    await this.driver.findElement(this.clickMoveBtn).click();
  }
}
