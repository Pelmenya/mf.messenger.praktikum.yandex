import { chat } from "../template-parts/chat.tmpl.js";
import { Nullable } from "../types/Nullable.js";

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;
  
  body.insertAdjacentHTML(
    "afterbegin",
    _.template(chat.tmpl)()
  );
