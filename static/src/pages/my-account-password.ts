import Button from "../../blocks/button/Button.js";
import Form from "../../blocks/form/Form.js";
import { myAccountPassword } from "../template-parts/my-account-password.tmpl.js";
import { Nullable } from "../types/Nullable.js";
import render from "../utils/functions/render.js";

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "afterbegin",
    _.template(myAccountPassword.tmpl)()
  );

  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".account__form");
  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }
  
  render(
    ".account__wrap-col_buttons",
    new Button({
      name: "submit_btn",
      text: "Сохранить",
      classList: "button account__save-password",
    })
  );


