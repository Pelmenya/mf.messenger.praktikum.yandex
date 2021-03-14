import { Template } from "../types/Template.js";

export const changeChat: Template = {
  tmpl:
    '<div class="body__container body__container_is-opened">\
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
            <input class="input chats__search" type="text" minlength="1">\
            <span class="chats__search-placeholder">&nbsp;&nbsp;Поиск</span>\
          </form> \
        </header>\
        <section class="chats-list">\
          <h2  class="chats-list__title" hidden>Список чатов</h2>\
          <div class="chats-list__container">\
            <hr class="chats-list__spliter">\
            <div class="card">\
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
    </div>\
    <a class="page-link" href="chat.html">Следущая страница</a>',
};
