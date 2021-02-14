function main() {
  localStorage.setItem("chatUser", "");

  const body = new Element({
    element: document.querySelector(".body"),
    classOpened: "body_is-opened",
  });

  const formSignIn = document.querySelector(".form-window__signin");
  const formSignUp = document.querySelector(".form-window__signup");
  const chatTemplate = document.querySelector(".chat-template");

  function openChat(item) {
    removeProfile(profileOwner);
    setProfile(profileOwner, item);
    console.log(getProfile(profileOwner));

    body.clear();
    body.appendChild(chatTemplate.content.cloneNode(true));
    body.open();
  }

  function openFormSignUp() {
    body.clear();
    body.appendChild(formSignUp.content.cloneNode(true));
    const formObjectSignUp = new Form(
      [
        {
          element: body.querySelector(".form__button-link"),
          event: "click",
          callBack: openFormSignIn,
        },
      ],
      body,
      openChat
    );
    formObjectSignUp.create();
    body.open();
  }

  function openFormSignIn() {
    body.clear();
    body.appendChild(formSignIn.content.cloneNode(true));
    const formObjectSignIn = new Form(
      [
        {
          element: body.querySelector(".form__button-link"),
          event: "click",
          callBack: openFormSignUp,
        },
      ],
      body,
      openChat
    );
    formObjectSignIn.create();
    body.open();
  }
  
  if (localStorage.getItem("chatUser") === "") openFormSignIn(); else openChat();

}
main();
