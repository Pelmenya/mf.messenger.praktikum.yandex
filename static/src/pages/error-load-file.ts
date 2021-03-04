(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "beforeend",
    _.template(popupAvatar.tmpl)({
      error_title: "form-window__title_popup_red",
      title: "Ошибка, попробуйте ещё раз",
      load:"",
      label:"Выбрать файл на компьютере",
      error:"",
    })
  );
})();