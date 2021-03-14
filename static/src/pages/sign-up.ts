import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { PATTERNS } from "../const/regex.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";
import SignUpPage from "./classes/SignUpPage.js";

render([
  {
    query: ".body-container",
    block: new SignUpPage({
      tagNameBlock: "main",
      classListBlock: ["body"],
      displayBlock: "flex",
      phone: PATTERNS.PATTERN_PHONE,
      email: PATTERNS.PATTERN_EMAIL,
    }),
  },
  {
    query: ".form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Зарегистрироваться",
      classList: "button",
    }),
  },
  {
    query: ".form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "link",
      text: "Войти",
      classList: "form__button-link",
    }),
  },
]);

const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signup");
if (formContainer !== null) {
  const form = new Form({
    container: formContainer,
  });
  form.create();
}
