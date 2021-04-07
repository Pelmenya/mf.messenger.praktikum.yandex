import Popup from "../../../../../blocks/popup/Popup.js";
import { ROUTES } from "../../../../const/routes.js";
import { Nullable } from "../../../../types/Nullable.js";
import Router from "../../../classes/Router.js";
import { store } from "../../../store/storeObj.js";
import getElementFromStore from "../../getElementFromStore.js";

export default function handlerChatsPage(router: Router) {
  const addChatPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_chat");
  if (addChatPopupElement !== undefined) {
    const createChartBtn: Nullable<HTMLButtonElement> = document.querySelector(
      ".chats__nav-btn_create"
    );
    const myAccountBtn: Nullable<HTMLButtonElement> = document.querySelector(
      ".chats__nav-btn_my-account"
    );

    if (createChartBtn !== null) {
      createChartBtn.addEventListener("click", () => addChatPopupElement.show());
    }

    if (myAccountBtn !== null) {
      myAccountBtn.addEventListener("click", () => router.go(ROUTES.MY_ACCOUNT));
    }

  }
}
