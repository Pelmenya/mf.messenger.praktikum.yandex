import Form from "../../../../../blocks/form/Form.js";
import Popup from "../../../../../blocks/popup/Popup.js";
import { Nullable } from "../../../../types/Nullable.js";
import Router from "../../../classes/Router.js";
import { store } from "../../../store/storeObj.js";
import getElementFromStore from "../../getElementFromStore.js";
import handlerAddChatSubmit from "../handlerAddChatSubmit.js";

export default function handlerChatsPage(router: Router) {
  const addChatPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_chat");

  if (addChatPopupElement !== undefined) {
    const addChatPopupContent: Nullable<HTMLElement> = addChatPopupElement.getContent();
    const createChartBtn: Nullable<HTMLButtonElement> = document.querySelector(
      ".chats__nav-btn_create"
    );

    if (addChatPopupContent !== null) {
      const formContainerAddChat: Nullable<HTMLFormElement> = addChatPopupContent.querySelector(
        ".popup_add-chat .form"
      );

      if (formContainerAddChat !== null) {
        const form = new Form({
          container: formContainerAddChat,
          handlerSubmit: handlerAddChatSubmit,
        });
        form.create();
      }
    }

    if (createChartBtn !== null) {
      createChartBtn.addEventListener("click", () => addChatPopupElement.show());
    }
  }
}
