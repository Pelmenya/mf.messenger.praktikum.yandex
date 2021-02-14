function main() {
  const accountData = new Element({
    element: document.querySelector(".account__data"),
    classOpened: "account__data_is-opened",
  });

  const popUpAvatar = new PopUp({
    element: document.querySelector(".popup"),
    classOpened: "popup_is-opened",
  });

  const profileObj = getProfile(profileOwner);
  const accountDataTmpl = document.querySelector(".account__data-template");
  const accountPasswordTmpl = document.querySelector(".account__password-template");
  const controlBackBtn = document.querySelector(".control__back-btn");

  accountData.appendChild(accountDataTmpl.content.cloneNode(true));

  const formData = accountData.querySelector(".form");
  const inputs = formData.querySelectorAll(".input");
  Object.keys(inputs).forEach((item) => {
    inputs[item].disabled = true;
    if (inputs[item].name in profileObj) inputs[item].value = profileObj[inputs[item].name];
    if (inputs[item].name === "nickname") inputs[item].value = profileObj["login"];
  });

  accountData.open();
  const accountAvatar = accountData.querySelector(".account__avatar");
  const editPasswordBtn = accountData.querySelector(".account__edit-btn_password");
  const editDataBtn = accountData.querySelector(".account__edit-btn_data");
  const logOutBtn = accountData.querySelector(".account__edit-btn_log-out");

  function editAvatar() {
    const fileLoadInput = popUpAvatar.querySelector(".form__input-file");
    const labelfileLoadInput = popUpAvatar.querySelector(".form__select-file");
    popUpAvatar.create();
    popUpAvatar.open();
    fileLoadInput.addEventListener("change", () => {
      const file = fileLoadInput.value.replace(/\\/g, "/").split("/").pop();
      if (file) {
        labelfileLoadInput.textContent = file;
        labelfileLoadInput.classList.add("form__select-file_ok");
      }
    });
  }

  function editData() {
    const menu = accountData.querySelector(".menu");
    const accountSaveDataBtn = accountData.querySelector(".account__save-data");
    accountSaveDataBtn.classList.add("button_is-opened");
    menu.classList.remove("menu_is-opened");
    Object.keys(inputs).forEach((item) => (inputs[item].disabled = false));
  }

  function editPassword() {
    accountData.close();
    accountData.clear();
    accountData.appendChild(accountPasswordTmpl.content.cloneNode(true));
    accountData.open();
  }

  function setLogOut() {
    removeProfile(profileOwner);
    window.location.href = "index.html";
  }

  accountAvatar.addEventListener("click", editAvatar);
  controlBackBtn.addEventListener("click", () => (window.location.href = "index.html"));
  editDataBtn.addEventListener("click", editData);
  editPasswordBtn.addEventListener("click", editPassword);
  logOutBtn.addEventListener("click", setLogOut);
}

main();
