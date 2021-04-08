import MyAccountUser from "../../template-parts/my-account/MyAccountUser.js";
import MyAccountUserMenu from "../../template-parts/my-account/MyAccountUserMenu.js";
import { PATTERNS } from "../regex.js";
import { currentUser } from "./currentUser.js";

export const myAccountProps = {
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
        name: "userFields",
        phone_pattern: PATTERNS.PATTERN_PHONE,
        email_pattern: PATTERNS.PATTERN_EMAIL,
        disabled: "disabled",
        currentUserProps: currentUser,
      }),
    },
    {
      query: "section.user-fields",
      block: new MyAccountUserMenu({
        tagNameBlock: "div",
        classListBlock: [
          "menu",
          "account__menu",
          "menu_is-opened"
        ],
        name: "account_user_menu"
      }),
    },
  ],
};
