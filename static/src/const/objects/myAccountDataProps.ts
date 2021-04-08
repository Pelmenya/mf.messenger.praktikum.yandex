import Button from "../../../blocks/button/Button.js";
import MyAccountUser from "../../template-parts/my-account/MyAccountUser.js";
import { PATTERNS } from "../regex.js";
import { currentUser } from "./currentUser.js";

export const myAccountDataProps = {
  tagNameBlock: "main",
  classListBlock: [
    "body__container",
    "body__container_is-opened",
  ],
  displayBlock: "flex",
  elements: [
    {
      query: "section.user-fields",
      block: new MyAccountUser({
        tagNameBlock: "div",
        classListBlock: [
          "account__data",
          "account__data_is-opened",
        ],
        name: "userDataFields",
        phone_pattern: PATTERNS.PATTERN_PHONE,
        email_pattern: PATTERNS.PATTERN_EMAIL,
        disabled: "",
        currentUserProps: currentUser,
      }),
    },
    {
      query: ".account__wrap-col_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "submit_btn_data",
        text: "Сохранить",
        classList: "button account__save-data",
      }),
    },
  ],
};
