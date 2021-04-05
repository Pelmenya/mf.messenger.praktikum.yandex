import { ROUTES } from "../../../const/routes.js";
import { Options } from "../../../types/Options.js";
import { authApi } from "../../api/AuthAPI.js";
import { router } from "../../classes/Router.js";

export default function handlerSignInSubmit(options: Options) {
 // authApi.logOut();
 return authApi.signin(options).then((data) => {
    if (data.status === 200) router.go(ROUTES.CHATS);
    else {
      const obj = JSON.parse(data.response);
      return obj.reason;
    }
  });
}

