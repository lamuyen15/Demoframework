import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class createIssuePage extends SeleniumWebdriverWrapper {
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
  plusBtn = By.xpath(`//button[@id='createGlobalItemIconButton']`);
  summaryField = By.xpath(`//input[@id="summary-field"]`);
  createBtn = By.xpath(
    `//button[@data-testid="issue-create.common.ui.footer.create-button"]`
  );
  issueCreated = By.xpath(`//div[.='to do exercise']`);

  //method of create issue

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async openJiraPage() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }

  public async openProject() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.sleep(3000);
  }

  public async openViewAll() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
  }

  public async openProjectInTheRecord() {
    await this.driver.findElement(this.nameOfProject).click();
    await this.driver.sleep(3000);
  }
  public async openCreateIssueField() {
    await this.driver.findElement(this.plusBtn).click();
  }
  public async enterIssue(nameIssue: string) {
    await this.driver.sleep(4000);
    await this.driver.findElement(this.summaryField).sendKeys(nameIssue);
  }
  public async clickCreateBtn() {
    await this.driver.findElement(this.createBtn).click();
  }
  public async newIssueDisplays() {
    await this.driver.sleep(2000);
    return this.driver.findElement(this.issueCreated).isDisplayed();
  }
}
