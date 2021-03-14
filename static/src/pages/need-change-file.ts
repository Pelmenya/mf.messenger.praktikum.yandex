import Button from "../../blocks/button/Button.js";
import { popupAvatar } from "../template-parts/popup-avatar.tmpl.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";

const body: Nullable<HTMLBodyElement> = document.getElementsByTagName("body")[0] as HTMLBodyElement;

body.insertAdjacentHTML(
  "beforeend",
  _.template(popupAvatar.tmpl)({
    error_title: "",
    title: "Загрузите файл",
    load: "",
    label: "Выбрать файл на компьютере",
    error: "form__error_is-opened",
  })
);

render(
  ".form__wrap_buttons",
  new Button({
    name: "submit_btn",
    text: "Поменять",
    classList: "button",
  })
);
