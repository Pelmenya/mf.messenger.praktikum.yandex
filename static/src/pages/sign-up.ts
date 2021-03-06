(() => {
  const { PATTERN_EMAIL, PATTERN_PHONE } = PATTERNS

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
  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signup");
  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }
})()