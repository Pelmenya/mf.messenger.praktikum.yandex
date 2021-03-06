"use strict";
const chat = (() => {
    const tmpl = '<main class="body body_grey">\
  <div class="body__container body__container_is-opened">\
    <h1 hidden>Чат для общения</h1>\
    <aside class="sidebar chats">\
      <header class="chats__header">\
        <nav class="chats__nav">\
          <a class="chats__link" href="my-account.html">\
            <span class="chats__link-text">Профиль&nbsp;&nbsp;</span>\
            <span class="chats__icon-angle-right"></span>\
          </a>\
        </nav>\
        <form class="chats__form">\
          <input class="input chats__search" type="text" minlength="2">\
          <span class="chats__search-placeholder">&nbsp;&nbsp;Поиск</span>\
        </form> \
      </header>\
      <section class="chats-list">\
        <h2  class="chats-list__title" hidden>Список чатов</h2>\
        <div class="chats-list__container">\
          <hr class="chats-list__spliter">\
          <% for (let i=1; i<=15; i++) { %> \
            <div class="card<% if (i===5){%> card__active<%}%>">\
            <div class="card__wrap-row card__person">\
              <div class="card__wrap-row">\
                <img class="card__avatar" src="./images/Ellipse.jpg" alt="Дмитрий">\
                <div class="card__message">\
                  <p class="card__name">Вадим</p>\
                  <p class="card__text">\
                    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то \
                    момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все \
                    знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все \
                    еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с \
                    пленкой.\
                    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p> \
                </div>\
              </div>\
              <div class="card__wrap-col card__info">\
                <div class=card__trash></div>\
                <div class="card__number-message"><span class="card__number-message-text">5</span></div>\
                <time class="card__time" datetime="00:24:45">24:45</time> \
              </div>\
            </div>\
          </div>\
          <hr class="chats-list__spliter">\
          <% } %>\
        </div>\
      </section>\
    </aside>\
    <aside class="sidebar chat">\
      <section class="messages-list">\
        <header class="messages-list__header">\
          <div class="messages-list__wrap-row messages-list__align-center">\
            <img class="messages-list__avatar" src="./images/Ellipse.jpg" alt="Вадим">\
            <p class="messages-list__name">Вадим</p>\
          </div> \
          <button class="messages-list__settings" type="button">\
            <span class="messages-list__settings-icon"></span> \
          </button>\
          <div class="form-window form-window__absolute form-window_messages-list-header">\
            <form class="form-window__content form-window__content_menu">\
              <div class="menu">\
                <button class="menu__button">\
                  <span class="menu__button-icon menu__button-icon_plus"></span>\
                  <span class="menu__button-text">Добавить пользователя</span>\
                </button>\
                <button class="menu__button">\
                  <span class="menu__button-icon menu__button-icon_cross"></span>\
                  <span class="menu__button-text">Удалить пользователя</span>\
                </button>\
              </div>\
            </form>\
          </div>\
        </header>\
        <hr class="messages-list__spliter">\
        <h2 class="messages-list__title" hidden>Чат</h2>\
        <div class="messages-list__container">\
          <time class="messages-list__text messages-list__text_info messages-list__text_time" datetime="2021-02-12">12 февраля</time> \
          <div class="messages-list__wrap-row messages-list__align-start">\
            <p class="messages-list__text messages-list__text-msg">\
              <span class="messages-list__text-block">\
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент \
                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем \
                что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще \
                находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\
              </span>\
              <span class="messages-list__text-block">\
                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так \
                никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе \
                за 45000 евро.\
              </span>\
              <time class="messages-list__time-msg messages-list__time-msg_text" datetime="00:24:45">24:45</time> \
            </p>\
          </div>\
          <div class="messages-list__wrap-row messages-list__align-start">\
            <div class="messages-list__pic-msg">\
              <time class="messages-list__time-msg messages-list__time-msg_pic" datetime="00:24:45">24:45</time>\
            </div>\
          </div>\
          <div class="messages-list__wrap-row messages-list__align-end">\
            <p class="messages-list__text messages-list__text-msg messages-list__text-msg_you">\
              <time class="messages-list__time-msg messages-list__time-msg_you" datetime="00:24:45"><span class="messages-list__time-msg-check"></span>24:45</time> \
              Круто!\
            </p>\
          </div>\
        </div>\
        <hr class="messages-list__spliter">\
        <div class = "messages-list__control messages-list__wrap-row">\
          <form class="messages-list__form-send">\
            <button class="messages-list__button messages-list__add-resource" type="button"></button>\
            <div class="form-window form-window__absolute form-window_messages-list-send">\
              <div class="form-window__content form-window__content_menu">\
                <div class="menu">\
                  <button class="menu__button">\
                    <span class="menu__button-icon menu__button-icon_photo"></span>\
                    <span class="menu__button-text">Фото или Видео</span>\
                  </button>\
                  <button class="menu__button">\
                    <span class="menu__button-icon menu__button-icon_file"></span>\
                    <span class="menu__button-text">Файл</span>\
                  </button>\
                  <button class="menu__button">\
                    <span class="menu__button-icon menu__button-icon_location"></span>\
                    <span class="menu__button-text">Локация</span>\
                  </button>\
                </div>\
              </div>\
            </div>\
            <input  class="messages-list__send-input" name="message" type="text" placeholder="Сообщение" minlength="2">\
            <button class="messages-list__button messages-list__send"></button>\
          </form>\
        </div>\
      </section>\
    </aside>\
  </div>\
  <a class="page-link page-link_chat" href="add-user.html">Следущая страница</a>\
  </main>';
    return { tmpl };
})();
//# sourceMappingURL=chat.tmpl.js.map