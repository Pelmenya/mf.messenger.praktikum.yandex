(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "beforeend",
    _.template(popupAvatar.tmpl)({
      error_title: "",
      title: "Загрузите файл",
      load:"",
      label:"Выбрать файл на компьютере",
      error:"form__error_is-opened",
    })
  );
})();