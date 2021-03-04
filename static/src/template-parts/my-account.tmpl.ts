const myAccount:Template = (() => {
  const tmpl:string =
  '<main class="body body_grey body_is-opened">\
  <div class="body__container body__container_is-opened">\
    <aside class="sidebar control">\
      <button class="control__back-btn"></button>\
    </aside>\
    <aside class="sidebar account">\
      <section class="account__data account__data_is-opened">\
        <h2 hidden>Личный кабинет</h2>\
        <div class="account__avatar">\
          <div class="account__avatar-overlay">\
            <div class="account__wrap-row account__wrap-row_avatar">\
              <span class="account__avatar-text">Поменять аватар</span>\
            </div>\
          </div>\
        </div>\
        <p class="account__name">Иван</p>\
        <form class="form account__form account__form_data" name="edit_data">\
          <div class="account__wrap-row">\
            <label class="account__label" for="email-field">Почта</label>\
            <input value="pochta@yandex.ru" <%=disabled%> name="email" id="email-field" class="input account__input" type="email" pattern=<%=email%>>\
          </div>\
          <hr class="account__spliter">\
          <div class="account__wrap-row">\
            <label class="account__label" for="login-field">Логин</label>\
            <input  value="ivanivanov" <%=disabled%> name="login" id="login-field" class="input account__input" type="text" required minlength="2" maxlength="30">\
          </div>\
          <hr class="account__spliter">\
          <div class="account__wrap-row">\
            <label class="account__label" for="first-name">Имя</label>\
            <input value="Иван" <%=disabled%> name="first_name" id="first-name" class="input account__input" type="text" required minlength="2" maxlength="30">\
          </div>\
          <hr class="account__spliter">\
          <div class="account__wrap-row">\
            <label class="account__label" for="second-name">Фамилия</label>\
            <input  value="Иванов" <%=disabled%> name="second_name" id="second-name" class="input account__input" type="text" required minlength="2" maxlength="30">\
          </div>\
          <hr class="account__spliter">\
          <div class="account__wrap-row">\
            <label class="account__label" for="display_name-field">Имя в чате</label>\
            <input  value="Иван" <%=disabled%> name="display_name" id="display_name-field" class="input account__input" type="text" required minlength="2" maxlength="30">\
          </div>\
          <hr class="account__spliter">\
          <div class="account__wrap-row">\
            <label class="account__label" for="phone-field">Телефон</label>\
            <input value="+79099673030" <%=disabled%> name="phone" id="phone-field" class="input account__input" type="tel" pattern="<%=phone%>">\
            </div>\
          <button class="button account__save-data">Сохранить</button>\
        </form>\
        <div class="menu account__menu <%=menu%>">\
          <button class="menu__button account__edit-btn account__edit-btn_data">Изменить данные</button>\
          <hr class="account__spliter">\
          <button class="menu__button account__edit-btn account__edit-btn_password">Изменить пароль</button>\
          <hr class="account__spliter">\
          <button class="menu__button account__edit-btn account__edit-btn_log-out">Выйти</button>\
        </div>\
      </section>\
    </aside>\
  </div>\
</main>';
    return { tmpl }
})();


