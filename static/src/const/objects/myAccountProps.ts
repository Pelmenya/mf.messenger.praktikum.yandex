import { PATTERNS } from "../regex.js";

export const myAccountProps = {
  tagNameBlock: "main",
  classListBlock: [
    "body__container",
    "body__container_is-opened",
  ],
  displayBlock: "flex",
  phone: PATTERNS.PATTERN_PHONE,
  email: PATTERNS.PATTERN_EMAIL,
  disabled: "disabled",
  menu: "menu_is-opened",

  handler: () => {},
};
