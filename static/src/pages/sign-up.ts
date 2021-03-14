import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { PATTERNS } from "../const/regex.js";
import { formSignUp } from "../template-parts/form-sign-up.tmpl.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";


  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;
  
  body.insertAdjacentHTML(
    "afterbegin",
    _.template(formSignUp.tmpl)({
      phone: PATTERNS.PATTERN_PHONE,
      email: PATTERNS.PATTERN_EMAIL,
    })
  );
  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signup");
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
      text: "Зарегистрироваться",
      classList: "button",
    })
  );

  render(
    ".form__wrap_buttons",
    new Button({
      name: "link",
      text: "Войти",
      classList: "form__button-link",
    })
  );

