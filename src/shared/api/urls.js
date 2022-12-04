import { IS_LOCAL } from "./config";

var HOST;
if (IS_LOCAL) HOST = "http://localhost:4000";
else HOST = "..."; // replace with heroku link

export const API_LOGIN = HOST + "/user/login";
export const API_MANAGER_REGISTRATION = HOST + "/register/manager";
export const API_STAFF_REGISTRATION = HOST + "/user/staff.validate";
export const API_WHO_AM_I = HOST + "/whoami";
export const API_LOG_OUT = HOST + "/logout";
export const API_ADD_STAFF = HOST + "/manager/staff.add";
export const API_CREATE_CATEGORY = HOST + "/manager/category/create";
export const API_CREATE_GOAL = HOST + "/staff/goal/create";
export const API_UPDATE_GOAL = HOST + "/staff/goal/update";
export const API_UPDATE_CATEGORY = HOST + "/manager/category/update";
export const API_DELETE_CATEGORY = HOST + "/manager/category/delete";
export const API_DELETE_GOALS = HOST + "/staff/goal/delete";
export const API_DELETE_STAFF = HOST + "/manager/staff/delete";

export { HOST };
