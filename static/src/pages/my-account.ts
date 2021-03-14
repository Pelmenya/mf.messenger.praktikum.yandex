import { PATTERNS } from "../const/regex.js";
import { myAccount } from "../template-parts/my-account.tmpl.js";
import { Nullable } from "../types/Nullable.js";

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "afterbegin",
    _.template(myAccount.tmpl)({
      disabled: "disabled",
      menu: "menu_is-opened",
      phone: PATTERNS.PATTERN_PHONE,
      email: PATTERNS.PATTERN_EMAIL,
    })
  );
