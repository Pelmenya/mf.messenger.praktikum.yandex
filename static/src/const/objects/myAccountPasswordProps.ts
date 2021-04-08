import Button from "../../../blocks/button/Button.js";
import MyAccountPassword from "../../template-parts/MyAccountPassword.js";

export const myAccountPasswordProps = {
  tagNameBlock: "main",
  classListBlock: [
    "body__container",
    "body__container_is-opened",
  ],
  displayBlock: "flex",
  elements: [
    {
      query: "section.user-fields",
      block: new MyAccountPassword({
        tagNameBlock: "div",
        classListBlock: [
          "account__data",
          "account__data_is-opened",
        ],
        name: "userPasswordFields",
        oldPassword: "",
        newPassword: "",
      }),
    },
    {
      query: ".account__wrap-col_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "submit_btn_password",
        text: "Сохранить",
        classList: "button account__save-password",
      }),
    },
  ],
};
