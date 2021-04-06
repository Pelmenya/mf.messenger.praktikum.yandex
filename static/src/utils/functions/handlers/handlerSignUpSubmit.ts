import { Options } from "../../../types/Options.js";
import { authApi } from "../../api/AuthAPI.js";
import renderChats from "../renderChats.js";

export default function handlerSignUpSubmit(options: Options) {
  return authApi.signup(options).then((data) => {
    if (data.status === 200)
      return renderChats();
    else {
      const obj = JSON.parse(data.response);
      return obj.reason;
    }
  });
}
