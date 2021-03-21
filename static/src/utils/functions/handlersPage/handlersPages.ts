import Form from "../../../../blocks/form/Form.js";
import { Nullable } from "../../../types/Nullable.js";


export default function handlerSignInPage(): void {
  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signin");

  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }
}
