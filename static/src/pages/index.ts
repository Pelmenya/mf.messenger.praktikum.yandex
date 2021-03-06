(() => {
  const { render } = renderFunction;
  const { Button } = ButtonClass;
  const { Form } = FormClass;

  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML("afterbegin", _.template(formSignIn.tmpl)());

  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signin");

  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }

  render(
    ".form__wrap_buttons",
    new Button({
      name: "submit_btn",
      text: "Авторизоваться",
      classList: "button",
    })
  );

  render(
    ".form__wrap_buttons",
    new Button({
      name: "link",
      text: "Нет аккаунта?",
      classList: "form__button-link",
    })
  );
})();
