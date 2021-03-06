(() => {
  const { render } = renderFunction;
  const { Button } = ButtonClass;
  const { Form } = FormClass;

  const { PATTERN_EMAIL, PATTERN_PHONE } = PATTERNS

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
  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".account__form");
  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }


  render(
    ".account__wrap-col_buttons",
    new Button({
      name: "submit_btn",
      text: "Сохранить",
      classList: "button account__save-data",
    })
  );

})();
