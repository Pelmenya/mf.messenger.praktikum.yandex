import { router } from "../../utils/classes/Router.js";
import handlerChatsPage from "../../utils/functions/handlers/pages/handlerChatsPage.js";
import { initalChatsElements } from "./initalChatsElements.js";

export const chatsProps = {
  tagNameBlock: "main",
  classListBlock: [
    "body__container",
    "body__container_is-opened",
  ],
  displayBlock: "flex",
  elements: initalChatsElements,
  handler: () => {
    handlerChatsPage(router);
  },
};
