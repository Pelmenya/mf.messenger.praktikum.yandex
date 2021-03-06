(() => {

  const { render } = renderFunction;
  const { Button } = ButtonClass;

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "beforeend",
    _.template(popupUser.tmpl)({
      title: "Удалить пользователя",
      action: "Удалить",
      next: "my-account.html",
    })
  );

  render(
    ".form__wrap_buttons",
    new Button({
      name: "submit_btn",
      text: "Удалить",
      classList: "button form__btn-user",
    })
  );

})();
