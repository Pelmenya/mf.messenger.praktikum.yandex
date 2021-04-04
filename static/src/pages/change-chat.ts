import render from "../utils/functions/render.js";
import ChangeChatPage from "./classes/ChatsPage.js";

render([
  {
    query: ".body-container",
    block: new ChangeChatPage({
      tagNameBlock: "main",
      classListBlock: ["body", "body_grey"],
      displayBlock: "flex",
    }),
  },
]);
