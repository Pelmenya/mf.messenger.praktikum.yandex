import { Options } from "../../../types/Options.js";
import { authApi } from "../../api/AuthAPI.js";
import { router } from "../../classes/Router.js";

export default function handlerSignUpSubmit(options: Options) {
  return authApi.signup(options).then((data) => {
    if (data.status === 200) router.go("/#chats");
    else {
      const obj = JSON.parse(data.response);
      return obj.reason;
    }
  });
}
