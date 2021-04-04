import render from "../utils/functions/render.js";
import ChatPage from "./classes/ChatPage_.js";

render([
  {
    query: ".body-container",
    block: new ChatPage({
      tagNameBlock: "main",
      classListBlock: ["body", "body_grey"],
      displayBlock: "flex",
    }),
  },
]);





