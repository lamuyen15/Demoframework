import { Before, World } from "cucumber";
import { and, before, binding, given, when } from "cucumber-tsflow/dist";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { ProjectCreatePage } from "../page/create_project";
import { Login } from "../page/login";

let driver: WebDriver;

@binding()
export class createNewProject {

  // function And(arg0: RegExp) {
  //   throw new Error("Function not implemented.");
  // }
}
