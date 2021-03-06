(() => {
  const { PATTERN_EMAIL, PATTERN_PHONE } = PATTERNS

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "afterbegin",
    _.template(myAccount.tmpl)({
      disabled: "disabled",
      menu: "menu_is-opened",
      phone: PATTERN_PHONE,
      email: PATTERN_EMAIL,
    })
  );
})();
