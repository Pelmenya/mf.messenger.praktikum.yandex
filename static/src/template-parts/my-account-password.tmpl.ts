const myAccountPassword:Template = (() => {
  const tmpl:string =
'<main class="body body_grey body_is-opened">\
    <div class="body__container body__container_is-opened">\
      <aside class="sidebar control">\
        <button class="control__back-btn"></button>\
      </aside>\
      <aside class="sidebar account">\
        <section class="account__data account__data_is-opened">\
          <h2 hidden>Личный кабинет - смена пароля</h2>\
          <div class="account__avatar"></div>\
          <form class="form account__form account__form_password" name="newpassword">\
            <div class="account__wrap-row">\
              <label class="account__label" for="old-password">Старый пароль</label>\
              <input name="old_password" id="old-password" class="input account__input" type="password" required minlength="6">\
              <span class="form__error form__error_account"></span>\
            </div>\
            <hr class="account__spliter">\
            <div class="account__wrap-row">\
              <label class="account__label" for="first-new-password">Новый пароль</label>\
              <input name="first_new_pasword" id="first-new-password" class="input account__input" type="password" required minlength="6">\
              <span class="form__error form__error_account"></span>\
            </div>\
            <hr class="account__spliter">\
            <div class="account__wrap-row">\
              <label class="account__label" for="second-new-password">Повторите новый пароль</label>\
              <input name="new_password" id="second-new-password" class="input account__input" type="password" required minlength="6">\
              <span class="form__error form__error_account"></span>\
            </div>\
            <div class="account__wrap-col account__wrap-col_buttons">\
            </div>\
          </form>\
        </section>\
      </aside>\
    </div>\
  </main>';
  
  return { tmpl }
})();