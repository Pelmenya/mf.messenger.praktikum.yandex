(() => {
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
})();