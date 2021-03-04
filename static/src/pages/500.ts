(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;
  
  body.insertAdjacentHTML(
    "afterbegin",
    _.template(err.tmpl)({
      title: "500",
      message: "Мы уже фиксим",
      back: "index.html",
      next: "404.html",
    })
  );
})();
