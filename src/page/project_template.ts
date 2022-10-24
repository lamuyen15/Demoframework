import { By, until, WebDriver } from "selenium-webdriver";
import { String } from "typescript-string-operations";
export class ProjectTemplatesPage {
  driver: WebDriver;

  leftNavigator = By.xpath(
    `//div[starts-with(@data-testid, 'project-template-select') and contains(@data-testid, 'navigation')]`
  );

  leftNavigationItem =
    "//div[starts-with(@data-testid, 'project-template-select') and contains(@data-testid, 'navigation')]//button[.='{0}']";

  scrumTemplateBtn = By.xpath(
    `//button[contains(@data-testid, 'template-list-button') and @aria-label='Scrum']`
  );

  useTemplateBtn = By.xpath(
    `//button[contains(@data-testid,'use-template-button')]`
  );

  projectTypesBtn = By.xpath(
    `//button[contains(@data-testid,'select-project-button-team-managed')]`
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async openLeftMenu(item: String) {
    let leftNavigationItemLocator = String.format(
      this.leftNavigationItem,
      item
    );
    await this.driver.findElement(By.xpath(leftNavigationItemLocator)).click();
  }

  public async clickScrumTemplate() {
    await this.openLeftMenu("Software development");
    await this.driver.findElement(this.scrumTemplateBtn).click();
  }

  public async openNewProjectTypeByTemplate() {
    await this.driver.findElement(this.useTemplateBtn).click();
    await this.driver.findElement(this.projectTypesBtn).click();
  }
}
