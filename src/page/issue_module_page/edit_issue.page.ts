import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class editIssuePage extends SeleniumWebdriverWrapper {
  // element of create issue
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );

  viewAllProjects = By.xpath(`//div[@role='group']//a[@href='/jira/projects']`);
  nameOfProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  theCreatedIssue = By.xpath(`//div[div[.='create TC for module user']]`);
  commentField = By.xpath(`//input[@placeholder="Add a comment…"]`);
  saveBtn = By.xpath(`//button[@data-testid='comment-save-button']`);
  updatedIssue = By.xpath(`//div[p[.='to prepare writing TC']]`);
  newCommentField = By.xpath(
    `//div[@data-testid='click-wrapper']//div[div[input[@data-testid='media-picker-file-input']]]//p`
  );

  //method of create issue

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async openJira() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }
  public async selectViewAllProjects() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.sleep(3000);
    await this.driver.findElement(this.projectTopHeaderBtn).click();
  }
  public async selectProjectTS() {
    await this.driver.findElement(this.nameOfProject).click();
    await this.driver.sleep(2000);
  }

  public async selectIssue() {
    await this.driver.findElement(this.theCreatedIssue).click();
    await this.driver.sleep(2000);
  }
  public async updateIssue(issue: string) {
    await this.driver.findElement(this.commentField).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(this.newCommentField).sendKeys(issue);
  }
  public async clickSaveBtn() {
    await this.driver.findElement(this.saveBtn).click();
  }
  public async issueDisplays() {
    return this.driver.findElement(this.updatedIssue).isDisplayed();
  }
}
