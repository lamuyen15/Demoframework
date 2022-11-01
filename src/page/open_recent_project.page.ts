import { By, WebDriver } from 'selenium-webdriver';
import { SeleniumWebdriverWrapper } from './seleniumWebdriverWrapper';
export class recentProjectPage extends SeleniumWebdriverWrapper{

    //elements for recent project
    showProductBtn = By.xpath(`//button[.='Show all products']`);
    JiraSoftwareBtn = By.xpath(
      `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
    );
  
    projectTopHeaderBtn = By.xpath(
      `//div[@id='ak-jira-navigation']//button[.='Projects']`
    ); 
 constructor(driver: WebDriver) {
    super(driver);
  }
  public async selectShowAllProducts() {
    await this.driver.findElement(this.showProductBtn).click();
  }

  public async selectJiraSoftware() {
    await this.driver.findElement(this.JiraSoftwareBtn).click();
  }

}