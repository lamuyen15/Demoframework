import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class searchBoardPage extends SeleniumWebdriverWrapper {
  //element of the search board

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  viewAllProjectsItem = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  nameProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  searchBoardField = By.xpath(`//input[@name='search']`);
  boardDisplay = By.xpath(
    `//div[div[(@data-test-id="platform-card.ui.card.actions-section")]]`
  );
  //method
  constructor(driver: WebDriver) {
    super(driver);
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
    await this.driver.findElement(this.boardDisplay).isDisplayed;
  }
}
