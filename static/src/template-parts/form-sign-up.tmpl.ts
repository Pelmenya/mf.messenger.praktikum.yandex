const formSignUp:Template = (() => {
  const tmpl:string =
  '<main class="body">\
    <div class="form-window form-window_is-opened">\
      <div class="form-window__content form-window__content_login">\
        <h1 class="form-window__title">Регистрация</h1>\
        <form class="form form__signup" name="signup">\
          <div class="form__wrap">\
            <label class="form__label" for="email-signup">Почта</label>\
            <input class="input" name="email" id="email-signup" type="email" placeholder="Почта" pattern="<%=email%>">\
            <span class="form__error form__error_email">Неверная почта</span>\
            <label class="form__label" for="login-signup">Логин</label>\
            <input class="input" name="login" id="login-signup" type="text" placeholder="Логин" required minlength="2" maxlength="30">\
            <span class="form__error form__error_login">Неверный логин</span>\
            <label class="form__label" for="first_name-signup">Имя</label>\
            <input class="input" name="first_name" id="first_name-signup" type="text" placeholder="Имя" required minlength="2" maxlength="30">\
            <span class="form__error form__error_first_name">Неверное имя</span>\
            <label class="form__label" for="second_name-signup">Фамилия</label>\
            <input class="input" name="second_name" id="second_name-signup" type="text" placeholder="Фамилия" required minlength="2" maxlength="30">\
            <span class="form__error form__error_second_name">Неверное фамилие</span>\
            <label class="form__label" for="phone-signup">Телефон</label>\
            <input class="input" name="phone" id="phone-signup" type="tel" placeholder="Телефон" pattern="<%=phone%>">\
            <span class="form__error form__error_phone">Неверный телефон</span>\
            <label class="form__label" for="password-signup">Пароль</label>\
            <input class="input" name="password" id="password-signup" type="password" placeholder="Пароль" required  minlength="6">\
            <span class="form__error form__error_password">Неверный пароль</span>\
            <label class="form__label" for="second-password-signup">Пароль</label>\
            <input class="input" name="password" id="second-password-signup" type="password" placeholder="Пароль" required  minlength="6">\
            <span class="form__error form__error_password">Неверный пароль</span>\
          </div>\
          <div class="form__wrap">\
            <button class="button">Зарегистрироваться</button>\
            <button type="button" class="form__button-link">Войти</button>\
        </div>\
        </form>\
      </div>\
    </div>\
    <a class="page-link" href="500.html">Следущая страница</a>\
  </main>';
    return { tmpl }
})();