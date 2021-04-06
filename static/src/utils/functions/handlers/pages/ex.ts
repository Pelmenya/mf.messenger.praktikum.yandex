import Form from "../../../../../blocks/form/Form.js";
import Popup from "../../../../../blocks/popup/Popup.js";
import { Nullable } from "../../../../types/Nullable.js";
import Router from "../../../classes/Router.js";
import { store } from "../../../store/storeObj.js";
import getElementFromStore from "../../getElementFromStore.js";
import handlerAddChatSubmit from "../handlerAddChatSubmit.js";

export default function handlerChatsPage(router: Router) {
  const addChatPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_chat");
  const addUserPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_user");
  const removeUserPopupElement: Popup = getElementFromStore(store, "chatsProps", "remove_user");
  const formEditUser: Nullable<HTMLElement> = document.querySelector(
    ".form-window__content_menu_user"
  );
  const editUserBtn: Nullable<HTMLElement> = document.querySelector(".messages-list__settings");
  const menuUser: Nullable<HTMLElement> = document.querySelector(
    ".form-window_messages-list-header"
  );
  console.log(menuUser)
  console.log(editUserBtn)
  menuUser.style.display = "flex";
    editUserBtn.addEventListener("click", () => {
      console.log(editUserBtn)

    });
  if (formEditUser !== null && editUserBtn !== null) {
    formEditUser.addEventListener("submit", (event: Event) => {
      if (event.target instanceof HTMLElement) {
        event.preventDefault();
      }
    });

  }

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
  if (addUserPopupElement !== undefined) {
    const addUserPopupContent: Nullable<HTMLElement> = addChatPopupElement.getContent();
    const addUserBtn: Nullable<HTMLButtonElement> = document.querySelector(
      ".menu__button_add-user"
    );

    console.log(addUserBtn);
    if (addUserPopupContent !== null) {
      const formContainerAddUser: Nullable<HTMLFormElement> = addUserPopupContent.querySelector(
        "form"
      );

      if (formContainerAddUser !== null) {
        const form = new Form({
          container: formContainerAddUser,
          handlerSubmit: handlerAddChatSubmit,
        });
        form.create();
      }

      if (addUserBtn !== null) {
        addUserBtn.addEventListener("click", () => {
          console.log("dfghjk");
          addUserPopupElement.show();
        });
      }
    }
  }

  if (removeUserPopupElement !== undefined) {
  }
}
