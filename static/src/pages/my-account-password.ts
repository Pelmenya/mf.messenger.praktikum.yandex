(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML(
    "afterbegin",
    _.template(myAccountPassword.tmpl)()
  );

  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".account__form");
  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  } 
})();
