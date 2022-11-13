import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class recentProjectPage extends SeleniumWebdriverWrapper {
  //elements for recent project
  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  projectAvailableBtn = By.xpath(
    ` //div[text()='Recent']//following-sibling::a[contains(@href,'/projects/PROJ/')]`
  );
  nameOfTheRecentProject = By.xpath(`//span[h2[.='Project1']]//parent::div`);

  constructor(driver: WebDriver) {
    super(driver);
  }
  public async clickJiraSoftwarePage() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.sleep(2000);
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }
  public async openHeaderMenu(header: String) {
    switch (header) {
      case "Project":
        await this.driver.findElement(this.projectTopHeaderBtn).click();
        break;
      default:
        break;
    }
  }

  public async clickRecentProjectFromHeader() {
    await this.openHeaderMenu("Project");
    await this.driver.sleep(4000);
  }

  public async clickTheRecentProject() {
    await this.driver.findElement(this.projectAvailableBtn).click();
    await this.driver.sleep(1000);
  }

  public async theRecentProjectDisplay() {
    return this.driver.findElement(this.nameOfTheRecentProject).isDisplayed();
  }
}
