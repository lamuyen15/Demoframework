import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "./seleniumWebdriverWrapper";

export class editIssuePage extends SeleniumWebdriverWrapper{
      // element of create issue
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  JiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );

  viewAllProjects = By.xpath(`//div[@role='group']//a[@href='/jira/projects']`);
  nameProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  theIssueCreated=By.xpath(`//div[div[.='create TC for module user']]`);
  nameField=By.xpath(`//div[h1[@data-test-id='issue.views.issue-base.foundation.summary.heading']]`);
  checkMarkBtn=By.xpath(`//button[@type='submit']`);
  closeBtn=By.xpath(`//button[@aria-label='Close']`);
  theIssueEdited=By.xpath(`//div[div[.='create TC for module user to prepare writing TC']]`);
  //method of create issue

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async openJira(){
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.JiraSoftwareBtn).click();
  }
  public async selectViewAllProjects(){
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.sleep(3000);
    await this.driver.findElement(this.projectTopHeaderBtn).click();
  }
  public async selectProjectTS(){
    await this.driver.findElement(this.nameProject).click();
  }

  public async selectIssue(){
    await this.driver.findElement(this.theIssueCreated).click();
  }
  public async updateIssue(issue:string){
    await this.driver.findElement(this.nameField).sendKeys(issue);
  }
  public async clickCheckMarkBtn(issue:string){
    await this.driver.findElement(this.checkMarkBtn).click;
  }
  public async clickCloseBtn(issue:string){
    await this.driver.findElement(this.closeBtn).click;
  }
  public async issueDisplays(issue:string){
    await this.driver.findElement(this.checkMarkBtn).click;
  }

}