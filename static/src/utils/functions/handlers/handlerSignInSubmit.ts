import { Options } from "../../../types/Options.js";
import { authApi } from "../../api/AuthAPI.js";
import renderChats from "../renderChats.js";

export default function handlerSignInSubmit(options: Options) {
  return authApi.signin(options).then((data) => {
    if (data.status === 200)
      return renderChats();
    else {
      const obj = JSON.parse(data.response);
      return obj.reason;
    }
  });
}
