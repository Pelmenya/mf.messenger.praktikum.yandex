import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { PATTERNS } from "../const/regex.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";
import MyAccountPage from "./classes/MyAccountPage.js";

render([
  {
    query: ".body-container",
    block: new MyAccountPage({
      tagNameBlock: "main",
      classListBlock: [
        "body",
        "body_grey",
      ],
      displayBlock: "flex",
      phone: PATTERNS.PATTERN_PHONE,
      email: PATTERNS.PATTERN_EMAIL,
      disabled: "",
      menu: "",
    }),
  },
  {
    query: ".account__wrap-col_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Сохранить",
      classList: "button account__save-data",
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
