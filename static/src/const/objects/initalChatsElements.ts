import Button from "../../../blocks/button/Button.js";
import Popup from "../../../blocks/popup/Popup.js";
import ChatNotSelected from "../../template-parts/ChatNotSelected.js";
import ChatSelected from "../../template-parts/ChatSelected.js";

export const initalChatsElements = [
  {
    query: "div .body__container .body__container_is-opened",
    block: new ChatNotSelected({
      tagNameBlock: "aside",
      classListBlock: [
        "sidebar",
        "chat",
      ],
      displayBlock: "flex",
      name: "chatNotSelected"
    }),
  },
  {
    query: "div .body__container .body__container_is-opened",
    block: new ChatSelected({
      tagNameBlock: "aside",
      classListBlock: [
        "sidebar",
        "chat",
        "sidebar_is-closed"
      ],
      displayBlock: "flex",
      name: "chatSelected",
      title: "",
    }),
  },
  {
    query: ".app",
    block: new Popup({
      tagNameBlock: "div",
      classListBlock: [
        "popup",
        "popup_add-user",
      ],
      displayBlock: "flex",
      title: "Добавить пользователя",
      name: "add_user",
      field: "add_user",
      placeholder: "Пользователь",
    }),
  },
  {
    query: ".popup_add-user .form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Добавить",
      classList: "button form__btn-user form__btn-user_add",
    }),
  },
  {
    query: ".app",
    block: new Popup({
      tagNameBlock: "div",
      classListBlock: [
        "popup",
        "popup_remove-user",
      ],
      displayBlock: "flex",
      title: "Удалить пользователя",
      name: "remove_user",
      field: "remove_user",
      placeholder: "Пользователь",
    }),
  },
  {
    query: ".popup_remove-user .form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Удалить",
      classList: "button form__btn-user form__btn-user_remove",
    }),
  },
  {
    query: ".app",
    block: new Popup({
      tagNameBlock: "div",
      classListBlock: [
        "popup",
        "popup_add-chat",
      ],
      displayBlock: "flex",
      title: "Добавить чат",
      name: "add_chat",
      field: "title",
      placeholder: "Чат",
    }),
  },
  {
    query: ".popup_add-chat .form__wrap_buttons",
    block: new Button({
      tagNameBlock: "div",
      name: "submit_btn",
      text: "Добавить",
      classList: "button form__btn-user form__btn-user_chat",
    }),
  },
];
