import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { formSignIn } from "../template-parts/form-sign-in.tmpl.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";

const body: Nullable<HTMLBodyElement> = document.getElementsByTagName("body")[0] as HTMLBodyElement;

body.insertAdjacentHTML("afterbegin", _.template(formSignIn.tmpl)());

const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signin");

if (formContainer !== null) {
  const form = new Form({
    container: formContainer,
  });
  form.create();
}

render(
  ".form__wrap_buttons",
  new Button({
    name: "submit_btn",
    text: "Авторизоваться",
    classList: "button",
  })
);

render(
  ".form__wrap_buttons",
  new Button({
    name: "link",
    text: "Нет аккаунта?",
    classList: "form__button-link",
  })
); 
