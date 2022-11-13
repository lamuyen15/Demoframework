import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class addPeoPleProjectPage extends SeleniumWebdriverWrapper {
  //element for test case add person
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
  projectPage = By.xpath(`//div[h1[.='Projects']]`);
  nameOfProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  projectSettingBtn = By.xpath(`//div[span[contains(.,'Project settings')]]`);
  accessBtn = By.xpath(`//span[contains(text(),'Access')]//ancestor::a`);
  addPeopleBtn = By.xpath(`//button[span[contains(text(),'Add people')]]`);
  emailAddressField = By.xpath(
    `//div[@data-test-id='project-add-people.dialog.input']//input`
  );
  roleField = By.xpath(
    `//label[.='Role']/following-sibling::div//div[starts-with(@data-test-id,"project-add-people")]`
  );
  administrationItem = By.xpath(
    `//div[div[div[contains(text(),'Administrator')]]]`
  );
  addBtn = By.xpath(`//button[.='Add']`);
  nameOfPeopleField = By.xpath(`//div[contains(@id,'option-0')]`);
  newPerson = By.xpath(`//td[.="Hưng Phan Đào Hải"]`);
  //method for test case add person
  constructor(driver: WebDriver) {
    super(driver);
  }
  public async clickJira() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }
  public async isOnProjectPage() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.findElement(this.viewAllProjectsItem).click();
    await this.driver.sleep(2000);
  }

  public async selectProject() {
    await this.driver.findElement(this.nameOfProject).click();
  }

  public async selectProjectSetting() {
    await this.driver.sleep(5000);
    await this.driver.findElement(this.projectSettingBtn).click();
  }

  public async selectAccess() {
    await this.driver.sleep(3000);
    await this.driver.findElement(this.accessBtn).click();
    await this.driver.sleep(3000);
  }

  public async selectAddPeopleBtn() {
    await this.driver.findElement(this.addPeopleBtn).click();
    await this.driver.sleep(6000);
  }
  public async waitForAddressFieldDisplayed() {
    await this.waitUntilElementLoadedAndDisplayed(this.emailAddressField);
  }

  public async setName() {
    await this.driver
      .findElement(this.emailAddressField)
      .sendKeys("hung.phan@evizi.com");
    await this.driver.sleep(3000);
    await this.driver.findElement(this.nameOfPeopleField).click();
  }

  public async selectAddBtn() {
    await this.driver.findElement(this.addBtn).click();
  }

  public async newPersonDisplays() {
    await this.driver.sleep(3000);
    return this.driver.findElement(this.newPerson).isDisplayed();
  }
}
