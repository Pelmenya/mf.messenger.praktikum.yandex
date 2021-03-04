(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;
  
  body.insertAdjacentHTML(
    "afterbegin",
    _.template(formSignUp.tmpl)({
      phone: PATTERN_PHONE,
      email: PATTERN_EMAIL,
    })
  );
})()