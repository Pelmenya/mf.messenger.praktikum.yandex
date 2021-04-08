import Form from "../../blocks/form/Form.js";
import BlockProps from "../types/BlockProps.js";
import { Nullable } from "../types/Nullable.js";
import Block from "../utils/classes/Block.js";
import { myAccountPassword } from "./my-account-password.tmpl.js";

interface MyAccountPasswordProps extends BlockProps {
  oldPassword: string;
  newPassword: string;
}

export default class MyAccountPassword extends Block<MyAccountPasswordProps> {
  constructor(props: MyAccountPasswordProps) {
    super(props);
    this.create()
  }

  public create() {
    if (this.element !== null) {
      const formContainer: Nullable<HTMLFormElement> = this.element.querySelector("form");
      console.log(formContainer)
      if (formContainer !== null) {
        const form = new Form({
          container: formContainer,
        });
        console.log(form)
        form.create();
      }
    }
  }

  public render() {
    return _.template(myAccountPassword.tmpl)(this.props);
  }
}