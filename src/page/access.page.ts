import { By, WebDriver } from "selenium-webdriver";

export class addPeoPleProjectPage {
  driver: WebDriver;

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  clickViewAllProjects = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );
  projectPage = By.xpath(`//div[h1[.='Projects']]`);
  nameProject = By.xpath(`//tr//td[.='practice-projectTS']`);
  projectSettingBtn = By.xpath(`//div[span[contains(.,'Project settings')]]`);
  accessBtn = By.xpath(`//span[contains(text(),'Access')]//ancestor::a`);
  addPeopleBtn = By.xpath(`//button[span[contains(text(),'Add people')]]`);
  emailAddressField=By.xpath(`//div[@data-test-id='project-add-people.dialog.input']`);
  roleField=By.xpath(`//label[.='Role']/following-sibling::div//div[starts-with(@data-test-id,"project-add-people")]`)
  administrationItem=By.xpath(`//div[div[div[contains(text(),'Administrator')]]]`);
  addBtn=By.xpath(`//button[.='Add']`);

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async isOnProjectPage() {
    await this.driver.sleep(3000);
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(this.clickViewAllProjects).click();
    await this.driver.sleep(5000);

  }

  public async selectProject() {
    await this.driver.findElement(this.nameProject).click();
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

  public async setName(nameAddress:string) {
    await this.driver.findElement(this.emailAddressField).click();
    await this.driver.findElement(this.emailAddressField).sendKeys(nameAddress);
  }

  public async selectAdministrator() {
    await this.driver.findElement(this.roleField).click();
    await this.driver.findElement(this.administrationItem).click();
  }
  public async selectAddBtn() {
    await this.driver.findElement(this.addBtn).click();
  }
}
