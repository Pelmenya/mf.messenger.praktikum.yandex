import { err } from "../template-parts/error.tmpl.js";
import { Nullable } from "../types/Nullable.js";

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "afterbegin",
    _.template(err.tmpl)({
      title: "404",
      message: "Не туда попали",
      back: "index.html",
      next: "change-chat.html",
    })
  );
