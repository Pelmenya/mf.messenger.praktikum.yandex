"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("beforeend", _.template(popupUser.tmpl)({
        title: "Добавить пользователя",
        next: "delete-user.html",
    }));
    render(".form__wrap_buttons", new Button({
        name: "submit_btn",
        text: "Добавить",
        classList: "button form__btn-user",
    }));
})();
//# sourceMappingURL=add-user.js.map