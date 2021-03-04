(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "afterbegin",
    _.template(myAccount.tmpl)({
      disabled: "",
      menu: "",
      phone: PATTERN_PHONE,
      email: PATTERN_EMAIL,
    })
  );
})();
