"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("beforeend", _.template(popupUser.tmpl)({
        title: "Удалить пользователя",
        action: "Удалить",
        next: "my-account.html",
    }));
    render(".form__wrap_buttons", new Button({
        name: "submit_btn",
        text: "Удалить",
        classList: "button form__btn-user",
    }));
})();
//# sourceMappingURL=delete-user.js.map