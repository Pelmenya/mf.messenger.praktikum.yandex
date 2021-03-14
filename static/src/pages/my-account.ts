import { PATTERNS } from "../const/regex.js";
import render from "../utils/functions/render.js";
import MyAccountPage from "./classes/MyAccountPage.js";

render([
  {
    query: ".body-container",
    block: new MyAccountPage({
      tagNameBlock: "main",
      classListBlock: [
        "body",
        "body_grey",
      ],
      displayBlock: "flex",
      phone: PATTERNS.PATTERN_PHONE,
      email: PATTERNS.PATTERN_EMAIL,
      disabled: "disabled",
      menu: "menu_is-opened",
    }),
  },
]);
