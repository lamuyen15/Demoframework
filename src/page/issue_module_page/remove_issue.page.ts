import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class removeIssuePage extends SeleniumWebdriverWrapper {
  //element for remove issue
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );

  viewAllProjects = By.xpath(`//div[@role='group']//a[@href='/jira/projects']`);
  nameOfProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  issueOfToDoColumn = By.xpath(`//div[div[.='using Xpath']]`);
  moreBtn = By.xpath(
    `//button[@data-testid='issue-meatball-menu.ui.dropdown-trigger.button']`
  );
  deleteItem = By.xpath(`//button[.='Delete']`);
  deleteBtn = By.xpath(
    `//button[@data-testid='issue.views.issue-base.foundation.issue-actions.delete-issue.confirm-button']`
  );
  //method of create issue

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async isOnJiraPage() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }
  public async openViewAll() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.sleep(3000);
    await this.driver.findElement(this.projectTopHeaderBtn).click();
  }
  public async openProjectTS() {
    await this.driver.findElement(this.nameOfProject).click();
    await this.driver.sleep(2000);
  }
  public async selectIssue() {
    await this.driver.findElement(this.issueOfToDoColumn).click();
    await this.driver.sleep(2000);
  }
  public async selectMoreBtn() {
    await this.driver.findElement(this.moreBtn).click();
  }
  public async selectDeleteItem() {
    await this.driver.findElement(this.deleteItem).click();
  }
  public async selectDeleteBtn() {
    await this.driver.findElement(this.deleteBtn).click();
  }
  public async issueIsNotDisplays() {
    try {
      return this.driver.findElement(this.issueOfToDoColumn).isDisplayed();
    } catch {
      return false;
    }
  }
}
