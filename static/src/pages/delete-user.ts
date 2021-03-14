import Button from "../../blocks/button/Button.js";
import render from "../utils/functions/render.js";
import PopupUserPage from "./classes/PopupUserPage";

render([
  {
    query: ".body-container",
    block: new PopupUserPage({
      tagNameBlock: "div",
      classListBlock: ["popup", "popup_is-opened"],
      displayBlock: "flex",
      title: "Удалить пользователя",
    }),
  },
  {
    query: ".form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Удалить",
      classList: "button form__btn-user",
    }),
  },
]);


