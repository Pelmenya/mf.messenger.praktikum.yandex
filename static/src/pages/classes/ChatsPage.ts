import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { router } from "../../utils/classes/Router.js";
import { ROUTES } from "../../const/routes.js";
import getElementFromStore from "../../utils/functions/getElementFromStore.js";
import { store } from "../../utils/store/storeObj.js";
import { Nullable } from "../../types/Nullable.js";
import Popup from "../../../blocks/popup/Popup.js";
import setUserFields from "../../utils/functions/setUserFields.js";
import { chatsPage } from "./chatsPage.tmpl.js";
import clearContainer from "../../utils/functions/clearContainer.js";

export default class ChatsPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
    this.addEventListeners();
  }

  addEventListeners = () => {
    if (this.element !== null) {
      const myAccountBtn: Nullable<HTMLButtonElement> = this.element.querySelector(
        ".chats__nav-btn_my-account"
      );
      const createChartBtn: Nullable<HTMLButtonElement> = this.element.querySelector(
        ".chats__nav-btn_create"
      );
      const chatsHeader: Nullable<HTMLButtonElement> = this.element.querySelector(".chats__header");

      if (chatsHeader !== null) {
        chatsHeader.addEventListener("click", (event: Event) => {
          if (event.target instanceof HTMLElement) {
            const chatNotSelected = getElementFromStore(store, "chatsProps", "chatNotSelected");
            const chatSelected = getElementFromStore(store, "chatsProps", "chatSelected");
            const messagesContainer = chatSelected.element.querySelector(
              ".messages-list__container"
            );
            clearContainer(messagesContainer);
            chatSelected.hide();
            chatNotSelected.show();
          }
        });
      }

      if (createChartBtn !== null) {
        getElementFromStore(store, "chatsProps", "add_chat");
        createChartBtn.addEventListener("click", () => {
          const addChatPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_chat");
          if (addChatPopupElement !== undefined) {
            addChatPopupElement.show();
          }
        });
      }

      if (myAccountBtn !== null) {
        myAccountBtn.addEventListener("click", () => {
          setUserFields();
          router.go(ROUTES.MY_ACCOUNT);
        });
      }
    }
  };

  render() {
    return _.template(chatsPage.tmpl)(this.props);
  }
}
