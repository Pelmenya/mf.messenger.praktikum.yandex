import Button from "../../blocks/button/Button.js";
import render from "../utils/functions/render.js";
import PopupAvatarPage from "../template-parts/my-account/PopupAvatar.js";


render([
  {
    query: ".body-container",
    block: new PopupAvatarPage({
      tagNameBlock: "div",
      classListBlock: [
        "popup",
        "popup_is-opened",
      ],
      displayBlock: "flex",
      error_title: "",
      title: "Загрузите файл",
      load: "",
      label: "Выбрать файл на компьютере",
      error: "",
    }),
  },
  {
    query: ".form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Поменять",
      classList: "button",
    }),
  },
]);
