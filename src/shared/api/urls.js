import { IS_LOCAL } from "./config";

var HOST;
if (IS_LOCAL) HOST = "http://localhost:4000";
else HOST = "..."; // replace with heroku link

export const API_LOGIN = HOST + "/user/login";
export const API_MANAGER_REGISTRATION = HOST + "/register/manager";
export const API_STAFF_REGISTRATION = HOST + "/user/staff.validate";
export const API_WHO_AM_I = HOST + "/whoami";

export { HOST };
