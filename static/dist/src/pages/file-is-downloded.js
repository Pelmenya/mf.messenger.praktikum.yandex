"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("beforeend", _.template(popupAvatar.tmpl)({
        error_title: "",
        title: "Файл загружен",
        load: "form__select-file_ok",
        label: "pic.jpg",
        error: "",
    }));
    render(".form__wrap_buttons", new Button({
        name: "submit_btn",
        text: "Поменять",
        classList: "button",
    }));
})();
//# sourceMappingURL=file-is-downloded.js.map