import Button from "../../../blocks/button/Button";
import { router } from "../../utils/classes/Router";
import { handlerSignInPage } from "../../utils/functions/handlers/pages/handlerSignInPage";

export const signInProps = {
  tagNameBlock: "main",
  classListBlock: [
    "body",
  ],
  displayBlock: "flex",
  elements: [
    {
      query: ".form__wrap_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "submit_btn",
        text: "Авторизоваться",
        classList: "button",
      }),
    },
    {
      query: ".form__wrap_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "link",
        text: "Нет аккаунта?",
        classList: "form__button-link",
      }),
    },
  ],
  handler: () => {
    handlerSignInPage(router);
  },
};
