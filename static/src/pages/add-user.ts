(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "beforeend",
    _.template(popupUser.tmpl)({
      title: "Добавить пользователя",
      action: "Добавить",
      next: "delete-user.html",
    })
  );
})();
