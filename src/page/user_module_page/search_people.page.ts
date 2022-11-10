import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../seleniumWebdriverWrapper";

export class searchPeoplePage extends SeleniumWebdriverWrapper {
  //element for remove issue
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,'start-product__JIRA_SOFTWARE')]]`
  );

  searchField = By.xpath(`//input[@data-test-id='search-dialog-input']`);
  peopleBtn = By.xpath(
    `//a[@data-test-id="search-dialog-jira-advanced-search-people"]`
  );
  profileUser = By.xpath(
    `//div[@class='sc-1hzece-3 fxtMTI' and contains(text(),'Tien Tran')]`
  );
  //method of create issue

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async selectJiraSoftWare() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }

  public async selectSearchField() {
    await this.driver.findElement(this.searchField).click();
    await this.driver.sleep(2000);
  }

  public async enterNameOfPerson(nameOfPerson: string) {
    await this.driver.findElement(this.searchField).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(this.searchField).sendKeys(nameOfPerson);
  }

  public async selectPeopleBtn() {
    await this.driver.findElement(this.peopleBtn).click();
    await this.driver.sleep(2000);
  }
  public async userDisplays() {
    await this.driver.findElement(this.profileUser).isDisplayed();
  }
}
