import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "./seleniumWebdriverWrapper";
export class recentProjectPage extends SeleniumWebdriverWrapper {
  //elements for recent project

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  projectAvailableBtn = By.xpath(
    ` //div[text()='Recent']//following-sibling::a[contains(@href,'/projects/DEM/')]`
  );
  nameOfTheRecentProject=By.xpath(`//span[h2[.='demoproject10']]//parent::div`);

  constructor(driver: WebDriver) {
    super(driver);
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

  public async clickTheRecentProject(){
    await this.driver.findElement(this.projectAvailableBtn).click();
  }

  public async theRecentProjectDisplay(){
    await this.driver.findElement(this.nameOfTheRecentProject).isDisplayed();
  }
}
