import { IS_LOCAL } from "./config";

var HOST;
if (IS_LOCAL) HOST = "localhost:4000";
else HOST = "..."; // replace with heroku link

export const API_LOGIN = HOST+"/"

export { HOST };
