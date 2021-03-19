import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";
import IndexPage from "./classes/SignInPage.js";

render([
  {
    query: ".body-container",
    block: new IndexPage({
      tagNameBlock: "main",
      classListBlock: ["body"],
      displayBlock: "flex",
    }),
  },
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
]);

const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signin");

if (formContainer !== null) {
  const form = new Form({
    container: formContainer,
  });
  form.create();
}
