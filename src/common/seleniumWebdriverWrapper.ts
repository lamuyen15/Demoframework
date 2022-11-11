import {
  WebDriver,
  until,
  WebElementPromise,
  Locator,
  WebElement,
  Key,
} from "selenium-webdriver";
import { elementWaitTimeOutValue } from "./constants";

export class SeleniumWebdriverWrapper {
  constructor(protected readonly driver: WebDriver) {}

  public async waitUntilElementLoadedAndDisplayed(
    locator: Locator
  ): Promise<any> {
    const locatorValue = JSON.stringify(locator);
    this.driver.wait(
      until.elementLocated(locator),
      elementWaitTimeOutValue,
      `Element not located: ${locatorValue}`
    );
    this.driver.wait(
      until.elementIsVisible(this.driver.findElement(locator)),
      elementWaitTimeOutValue,
      `Element not visible: ${locatorValue}`
    );

    return this.driver.findElement(locator);
  }

  waitForCondition = async (condition: any) => this.driver.wait(condition);

  waitUntilPageElementsLoadedAndDisplayed = async (
    locators: Array<any>
  ): Promise<WebElementPromise> => {
    let elements;
    elements = locators.map(
      async (locator) => await this.waitUntilElementLoadedAndDisplayed(locator)
    );

    return (Promise as any).all(elements);
  };

  waitForElementInVisible = async (locator: Locator): Promise<any> =>
    await this.driver.wait(
      async () => (await this.driver.findElements(locator)).length === 0,
      elementWaitTimeOutValue,
      `Element not invisible: ${JSON.stringify(locator)}`
    );

  maximizeWindow = async () => {
    await this.driver.manage().window().maximize();
  };
}
