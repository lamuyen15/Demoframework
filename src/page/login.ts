import { By, until, WebDriver } from "selenium-webdriver";

export class Login {
  driver: WebDriver;
  userNameField = By.xpath(`//input[@id='username']`);
  userPasswordField = By.xpath(`//input[@id='password']`);
  clickContinue = By.xpath(`//button[@id='login-submit']`);
  result = By.xpath(`//button[.="Home"]`);

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async setUserName(userName: string) {
    await this.driver.findElement(this.userNameField).sendKeys(userName);
    await this.driver.findElement(this.clickContinue).click();
  }

  public async setUserPassword(passWord: string) {
    await this.driver.wait(
      until.elementIsVisible(this.driver.findElement(this.userPasswordField))
    );
    await this.driver.findElement(this.userPasswordField).sendKeys(passWord);
    await this.driver.findElement(this.clickContinue).click();
    await this.driver.sleep(5000);
  }
}
