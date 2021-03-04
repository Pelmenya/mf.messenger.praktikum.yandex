const formSignIn:Template = (() => {
  const tmpl:string =
  '<main class="body">\
    <div class="form-window form-window_is-opened">\
      <div class="form-window__content form-window__content_login">\
        <h1 class="form-window__title">Вход</h1>\
        <form class="form form__signin" name="signin">\
          <div class="form__wrap">\
            <label class="form__label" for="login-signin">Логин</label>\
            <input class="input" name="login" id="login-signin" type="text" placeholder="Логин" required minlength="2" maxlength="30">\
            <span class="form__error form__error_login">Неверный логин</span>\
            <label class="form__label" for="password-signin">Пароль</label>\
            <input class="input" name="password" id="password-signin" type="password" placeholder="Пароль" required  minlength="6">\
            <span class="form__error form__error_password">Неверный пароль</span>\
          </div>\
          <div class="form__wrap">\
            <button name="submit_btn" class="button">Авторизоваться</button>\
            <button class="form__button-link">Нет аккаунта?</button>\
          </div>\
        </form>\
      </div>\
    </div>\
    <a class="page-link" href="sign-up.html">Следущая страница</a>\
  </main>';
    return { tmpl }
})();

