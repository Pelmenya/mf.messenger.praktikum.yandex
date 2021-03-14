import Button from "../../blocks/button/Button.js";
import { popupUser } from "../template-parts/popup-user.tmpl.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "beforeend",
    _.template(popupUser.tmpl)({
      title: "Удалить пользователя",
      action: "Удалить",
      next: "my-account.html",
    })
  );

  render(
    ".form__wrap_buttons",
    new Button({
      name: "submit_btn",
      text: "Удалить",
      classList: "button form__btn-user",
    })
  );
