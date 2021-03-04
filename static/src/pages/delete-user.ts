(() => {
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
})();
