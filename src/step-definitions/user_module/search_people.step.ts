import assert from "assert";
import { Given, Then, When, World } from "cucumber";
import { searchPeoplePage } from "../../page/user_module_page/search_people.page";

let searchPeople: searchPeoplePage;
Given(/^User is on JiraSoftware page/, async function (this: World) {
  searchPeople = new searchPeoplePage(this.driver);
  await searchPeople.selectJiraSoftWare();
});
When(/^User click search field from Header/, async function (this: World) {
  searchPeople = new searchPeoplePage(this.driver);
  await searchPeople.selectSearchField();
});
When(
  /^User enter the name of person with name "([^"]*)"/,
  async function (this: World, nameOfPerson: string) {
    searchPeople = new searchPeoplePage(this.driver);
    await searchPeople.enterNameOfPerson(nameOfPerson);
  }
);

When(/^User select People button/, async function (this: World) {
    searchPeople = new searchPeoplePage(this.driver);
    await searchPeople.selectPeopleBtn();
  });
Then(/^The user with name "Tien Tran" displays/,async function(this:World){
    searchPeople=new searchPeoplePage(this.driver);
    let isSearchPeople = await searchPeople.userDisplays();
    assert.equal(isSearchPeople,true);
});
