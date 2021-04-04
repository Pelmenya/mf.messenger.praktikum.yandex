import { Template } from "../types/Template.js";

export const changeChat: Template = {
  tmpl:
    '<div class="body__container body__container_is-opened">\
      <h1 hidden>Чат для общения</h1>\
      <aside class="sidebar chats">\
        <header class="chats__header">\
          <nav class="chats__nav">\
            <button class="chats__nav-btn chats__nav-btn_create">\
              <span class="chats__create-chat"></span>\
              <span class="chats__link-text">&nbsp;&nbsp;Создать чат</span>\
            </button>\
            <button class="chats__nav-btn">\
              <span class="chats__link-text">Профиль&nbsp;&nbsp;</span>\
              <span class="chats__icon-angle-right"></span>\
            </button>\
          </nav>\
          <form class="chats__form">\
            <input class="input chats__search" type="text" minlength="1">\
            <span class="chats__search-placeholder">&nbsp;&nbsp;Поиск</span>\
          </form> \
        </header>\
        <section class="chats-list">\
          <h2 class="chats-list__title" hidden>Список чатов</h2>\
          <hr class="chats-list__spliter">\
          <div class="chats-list__container">\
          </div>\
        </section>\
      </aside>\
      <aside class="sidebar chat">\
        <section class="messages-list">\
          <h2 hidden>Отправка сообщения</h2>\
          <div class="messages-list__container messages-list__container_start">\
            <p class="messages-list__text messages-list__text_info messages-list__text_time">Выберите чат чтобы отправить сообщение</p>\
          </div>\
        </section>\
      </aside>\
    </div>',
};
