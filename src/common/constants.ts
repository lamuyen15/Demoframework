import { setDefaultTimeout } from "cucumber";

export const stepTimeOut = 90000;
export const elementWaitTimeOutValue = 55000;

const defaultTimeOut = 60000;
setDefaultTimeout(defaultTimeOut);

export class Constants {
  static readonly LOGIN_URL = "https://id.atlassian.com/login";
  static readonly DEFAULT_USR = "uyen.nguyen@evizi.com";
  static readonly DEFAULT_PASSWORD = "lamuyen_0105nt";
}
