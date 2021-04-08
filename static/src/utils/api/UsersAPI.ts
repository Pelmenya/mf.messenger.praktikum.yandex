import { URLS_API } from "../../const/urlsApi.js";
import { Options } from "../../types/Options.js";
import HTTPTransport from "../classes/HTTPTransport.js";
import BaseAPI from "./BaseAPI.js";

const usersAPIInstance = new HTTPTransport(`${URLS_API.BASE}${URLS_API.USER}`);

export default class UsersAPI extends BaseAPI {
  searchUser(options: Options) {
    return usersAPIInstance.post(URLS_API.SEARCH_USER, options);
  }
}

export const usersAPI = new UsersAPI();