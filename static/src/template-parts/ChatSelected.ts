import Form from "../../blocks/form/Form.js";
import Popup from "../../blocks/popup/Popup.js";
import BlockProps from "../types/BlockProps.js";
import { Nullable } from "../types/Nullable.js";
import Block from "../utils/classes/Block.js";
import getElementFromStore from "../utils/functions/getElementFromStore.js";
import { store } from "../utils/store/storeObj.js";
import { chatSelected } from "./chatSelected.tmpl.js";

interface ChatSelectedProps extends BlockProps {
  title: string;
  name_chat: string;
}

export default class ChatSelected extends Block<ChatSelectedProps> {
  constructor(props: ChatSelectedProps) {
    super(props);
    this.addEventListeners();
  }

  addEventListeners = () => {
    if (this.element !== null) {
      //const removeUserPopupElement: Popup = getElementFromStore(store, "chatsProps", "remove_user");
      const menuUser: Nullable<HTMLElement> = this.element.querySelector(
        ".form-window_messages-list-header"
      );
      const editUserBtn: Nullable<HTMLElement> = this.element.querySelector(
        ".messages-list__settings"
      );
      const addUserBtn: Nullable<HTMLElement> = this.element.querySelector(
        ".menu__button_add-user"
      );
      const removeUserBtn: Nullable<HTMLElement> = this.element.querySelector(
        ".menu__button_remove-user"
      );

      this.element.addEventListener("mousedown", () => {
        if (this.props.name_chat !== undefined)
          getElementFromStore(store, "chatsProps", this.props.name_chat).element.classList.add(
            "card__active"
          );
      });

      if (editUserBtn !== null && menuUser !== null)
        editUserBtn.addEventListener("click", () => {
          menuUser.classList.toggle("form-window_is-opened");
        });

      if (addUserBtn !== null && menuUser !== null)
        addUserBtn.addEventListener("click", () => {
          menuUser.classList.toggle("form-window_is-opened");

          const addUserPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_user");

          addUserPopupElement.show();

          if (addUserPopupElement !== undefined) {
            const addUserPopupContent = addUserPopupElement.getContent();
            if (addUserPopupContent !== null) {
              const formContainerAddUser: Nullable<
                HTMLFormElement
              > = addUserPopupContent.querySelector("form");

              if (formContainerAddUser !== null) {
                const form = new Form({
                  container: formContainerAddUser,
                  handlerSubmit: () => {}, // handlerAddUserSubmit,
                });
                form.create();
              }
            }
          }
        });

      if (removeUserBtn !== null && menuUser !== null)
        removeUserBtn.addEventListener("click", () => {
          menuUser.classList.toggle("form-window_is-opened");

          const removeUserPopupElement: Popup = getElementFromStore(store, "chatsProps", "remove_user");

          removeUserPopupElement.show();

          if (removeUserPopupElement !== undefined) {
            const removeUserPopupContent = removeUserPopupElement.getContent();
            if (removeUserPopupContent !== null) {
              const formContainerRemoveUser: Nullable<
                HTMLFormElement
              > = removeUserPopupContent.querySelector("form");

              if (formContainerRemoveUser !== null) {
                const form = new Form({
                  container: formContainerRemoveUser,
                  handlerSubmit: () => {}, // handlerAddUserSubmit,
                });
                form.create();
              }
            }
          }
        });
    }
  };

  render() {
    return _.template(chatSelected.tmpl)(this.props);
  }
}
