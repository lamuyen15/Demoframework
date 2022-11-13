import { By, WebDriver } from "selenium-webdriver";
export class RemoveProjectPage {
  driver: WebDriver;

  //element for remove project page

  showProductBtn = By.xpath(`//button[.='Show all products']`);
  jiraSoftwareBtn = By.xpath(
    `//button[div[starts-with(@data-testid,"start-product__JIRA_SOFTWARE")]]`
  );

  projectTopHeaderBtn = By.xpath(
    `//div[@id='ak-jira-navigation']//button[.='Projects']`
  );
  clickViewAllProjects = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );
  selectMoreBtn = By.xpath(
    `//tr[contains(.,'PRJCT')]//span[@role='img']//ancestor::button`
  );
  moveToTrashBtn = By.xpath(`//span[@role='menuitem']//parent::div`);
  moveBtn = By.xpath(
    ` //span[text()='Move']//ancestor::button[contains(@data-test-id, 'move-to-trash-button')]`
  );
  goToTrashItem = By.xpath(`//a[.='Go to trash']`);
  deletePermanently = By.xpath(
    `//span[.='Delete permanently' and @role="menuitem"]`
  );
  deleteBtn = By.xpath(`//button[.='Delete']`);
  messageDisplays = By.xpath(
    `//div[@data-testid="project-permanent-delete-modal.ui.flags.success-flag"]`
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  //method for remove project
  public async isAtJiraSoftwarePage() {
    await this.driver.findElement(this.showProductBtn).click();
    await this.driver.findElement(this.jiraSoftwareBtn).click();
  }

  public async openProjectFromHeader() {
    await this.driver.findElement(this.projectTopHeaderBtn).click();
    await this.driver.sleep(10000);
  }

  public async openViewAllProject() {
    await this.driver.findElement(this.clickViewAllProjects).click();
    await this.driver.sleep(4000);
  }

  public async openMoreBtn() {
    await this.driver.findElement(this.selectMoreBtn).click();
    await this.driver.sleep(5000);
  }

  public async openMoveToTrash() {
    await this.driver.findElement(this.moveToTrashBtn).click();
  }

  public async selectMoveBtn() {
    await this.driver.findElement(this.moveBtn).click();
    await this.driver.sleep(5000);
  }

  public async selectGoToTrash() {
    await this.driver.findElement(this.goToTrashItem).click();
    await this.driver.sleep(4000);
  }

  public async selectMoreBtnOnTrashPage() {
    await this.driver.findElement(this.selectMoreBtn).click();
    await this.driver.sleep(4000);
  }

  public async selectDelete() {
    await this.driver.findElement(this.deletePermanently).click();
    await this.driver.sleep(4000);
  }

  public async clickDeleteBtn() {
    await this.driver.findElement(this.deleteBtn).click();
    await this.driver.sleep(3000);
  }

  public async messageDisplay() {
    return this.driver.findElement(this.messageDisplays).isDisplayed();
  }
}
