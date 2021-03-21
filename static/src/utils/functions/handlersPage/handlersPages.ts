import Form from "../../../../blocks/form/Form.js";
import { Nullable } from "../../../types/Nullable.js";
import Router from "../../classes/Router.js";

export function handlerSignInPage(router: Router): void {
  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signin");

  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }
  const btn: Nullable<HTMLFormElement> = document.querySelector(".form__button-link");
  if (btn !== null) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      router.go("/#signup");
    });
  }
}

export function handlerSignUpPage(router: Router): void {
  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signup");
  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }

  const btn: Nullable<HTMLFormElement> = document.querySelector(".form__button-link");
  if (btn !== null) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      router.go("/");
    });
  }
}
