import { World } from "cucumber";
import { binding, given, when } from "cucumber-tsflow/dist";
import { ProjectTemplatesPage } from "../page/project_template";
import { WebDriver } from "selenium-webdriver";
import { Projects } from "../page/projects";

let driver: WebDriver;

@binding()
export class ProjectTemplates {}
