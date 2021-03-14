import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";
import MyAccountPasswordPage from "./classes/MyAccountPasswordPage.js";

render([
  {
    query: ".body-container",
    block: new MyAccountPasswordPage({
      tagNameBlock: "main",
      classListBlock: [
        "body",
        "body_grey",
      ],
      displayBlock: "flex",
    }),
  },
  {
    query: ".account__wrap-col_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Сохранить",
      classList: "button account__save-password",
    }),
  },
]);

const formContainer: Nullable<HTMLFormElement> = document.querySelector(".account__form");
if (formContainer !== null) {
  const form = new Form({
    container: formContainer,
  });
  form.create();
}
