(() => {
  const { render } = renderFunction;
  const { Button } = ButtonClass;

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "beforeend",
    _.template(popupAvatar.tmpl)({
      error_title: "",
      title: "Файл загружен",
      load:"form__select-file_ok",
      label:"pic.jpg",
      error:"",
    })
  );
  
  render(
    ".form__wrap_buttons",
    new Button({
      name: "submit_btn",
      text: "Поменять",
      classList: "button",
    })
  );

})();