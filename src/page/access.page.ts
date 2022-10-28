import { By, WebDriver } from 'selenium-webdriver';

export class addPeoPleProjectPage{
driver:WebDriver;

projectPage=By.xpath(`//div[h1[.='Projects']]`);









constructor(driver:WebDriver){
    this.driver=driver;
}

public async isOnProjectPage() {
    await this.driver.findElement(this.projectPage).isDisplayed();
  }


}