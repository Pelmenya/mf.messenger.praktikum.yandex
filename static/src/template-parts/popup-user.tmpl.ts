const popupUser:Template = (() => {
  const tmpl:string =
  '<div class="popup popup_is-opened">\
    <div class="popup__content">\
      <div class="form-window form-window_is-opened form-window_popup">\
        <div class="form-window__content form-window__content_popup">\
          <h3 class="form-window__title form-window__title_popup"><%=title%></h3>\
          <form class="form form__user" name="user">\
            <div class="form__wrap">\
              <label class="form__label form__label_hidden" for="user-name">Логин</label>\
              <input class="input" name="user_name" id="user-name" type="text" placeholder="Пользователь">\
            </div>\
            <button class="button form__btn-user"><%=action%></button>\
          </form>\
        </div>  \
      </div>\
    </div>\
  </div>\
  <a class="page-link page-link_chat" href="<%=next%>">Следущая страница</a>';
    return { tmpl }
})();