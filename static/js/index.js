function main() {
  localStorage.setItem("chatUser", "");

  const formWindow = new Element({
    element: document.querySelector(".form-window"),
    classOpened: "form-window_is-opened",
  });

  const formSignIn = document.querySelector(".form-window__signin");
  const formSignUp = document.querySelector(".form-window__signup");

  function openFormSignUp() {
    formWindow.clear();
    formWindow.appendChild(formSignUp.content.cloneNode(true));
    const formObjectSignUp = new Form(
      [
        {
          element: formWindow.querySelector(".form__button-link"),
          event: "click",
          callBack: openFormSignIn,
        },
      ],
      formWindow,
      console.log
    );
    formObjectSignUp.create();
    formWindow.open();
  }

  function openFormSignIn() {
    formWindow.clear();
    formWindow.appendChild(formSignIn.content.cloneNode(true));
    const formObjectSignIn = new Form(
      [
        {
          element: formWindow.querySelector(".form__button-link"),
          event: "click",
          callBack: openFormSignUp,
        },
      ],
      formWindow,
      console.log
    );
    formObjectSignIn.create();
    formWindow.open();
  }
   if (localStorage.getItem("chatUser") === "") openFormSignIn();

}

main();
