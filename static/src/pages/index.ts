

(() => {
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
})();
