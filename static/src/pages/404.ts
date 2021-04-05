import render from "../utils/functions/render.js";
import ErrorPage from "./classes/ErrorPage.js";


render([
  {
    query: ".body-container",
    block: new ErrorPage({
      tagNameBlock: "main",
      classListBlock: [
        "body",
      ],
      displayBlock: "flex",
      title: "404",
      message: "Не туда попали",
    }),
  },
]);
