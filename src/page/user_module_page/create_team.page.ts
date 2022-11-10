import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../seleniumWebdriverWrapper";

export class createTeamPage extends SeleniumWebdriverWrapper {
  //element for remove issue
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,'start-product__JIRA_SOFTWARE')]]`
  );
  moreBtn = By.xpath(`//button[@data-testid='overflow-menu-trigger']`);
  peopleItem = By.xpath(`//button[@data-testid='menu-people-primary-button']`);
  createTeamItem = By.xpath(`//button[@data-testid='menu-create-team']`);
  nameTeamField = By.xpath(`//input[@name='teamName']`);
  inviteField = By.xpath(`//input[@id='react-select-AddMemberToTeam-input']`);
  createTeamBtn = By.xpath(`//button[@type='submit']`);
  messageTeamCreated=By.xpath(`//div[@role='alert']`);
  //method of create issue

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async selectJira() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }
  public async selectMore() {
    await this.driver.findElement(this.moreBtn).click();
  }
  public async selectPeopleItem() {
    await this.driver.findElement(this.peopleItem).click();
    await this.driver.sleep(1000);
  }
  public async selectCreateTeam() {
    await this.driver.findElement(this.createTeamItem).click();
  }

  public async enterNameTeam(nameTeam: string) {
    await this.driver.sleep(3000);
    await this.driver.findElement(this.nameTeamField).sendKeys(nameTeam);
  }
  public async enterUserInvited(userAddress: string) {
    await this.driver.findElement(this.inviteField).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.inviteField).sendKeys(userAddress);
  }
  public async selectUser() {
    await this.driver.findElement(this.createTeamBtn).click();
    await this.driver.sleep(2000);
  }
  public async messageCreatedTeamDisplays() {
    await this.driver.findElement(this.messageTeamCreated).isDisplayed();
  }
}
