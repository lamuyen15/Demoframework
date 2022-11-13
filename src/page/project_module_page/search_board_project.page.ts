import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class searchBoardPage extends SeleniumWebdriverWrapper {
  //element of the search board
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  viewAllProjectsItem = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  nameProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  searchBoardField = By.xpath(`//input[@name='search']`);
  boardDisplay = By.xpath(
    `//div[span[.='create 10-15TC']]`
  );
  //method
  constructor(driver: WebDriver) {
    super(driver);
  }
  public async clickJiraSoftware() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }
  public async clickProject() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
  }

  public async clickViewAllProjects() {
    await this.driver.findElement(this.viewAllProjectsItem).click();
  }

  public async selectProjects() {
    await this.driver.sleep(3000);
    await this.driver.findElement(this.nameProject).click();
  }

  public async enterBoard(nameBoard: string) {
    await this.driver.sleep(3000);
    await this.driver.findElement(this.searchBoardField).click();
    await this.driver.findElement(this.searchBoardField).sendKeys(nameBoard);
  }

  public async theBoardDisplay() {
    await this.driver.sleep(1000);
    return this.driver.findElement(this.boardDisplay).isDisplayed();

  }
}
