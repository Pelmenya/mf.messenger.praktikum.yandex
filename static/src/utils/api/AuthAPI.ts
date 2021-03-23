import HTTPTransport from "../classes/HTTPTransport.js";
import BaseAPI from "./BaseAPI.js";
import { URLS_API } from "../../const/urlsApi.js";
import { Options } from "../../types/Options.js";
import { METHOD } from "../../const/methods.js";

const authAPIInstance = new HTTPTransport(`${URLS_API.BASE}${URLS_API.AUTH}`);

export default class AuthAPI extends BaseAPI {
  getCurrentUser() {
    return authAPIInstance
      .get(URLS_API.GET_USER)
      .then((data) => {
        if (data.status === 200) return JSON.parse(data.response);
        else {
          return null;
        }
      })
      .catch((err) => console.log((err)));
  }

  signup(options: Options) {
    return authAPIInstance.post(URLS_API.SIGNUP, options);
  }

  logOut() {
    const options: Options = { method: METHOD.POST };
    return authAPIInstance.post(URLS_API.LOGOUT, options);
  }

  signin(options: Options) {
    return authAPIInstance.post(URLS_API.SIGNIN, options);
  }
}

export const authApi = new AuthAPI();
