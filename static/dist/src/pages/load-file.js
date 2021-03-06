"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("beforeend", _.template(popupAvatar.tmpl)({
        error_title: "",
        title: "Загрузите файл",
        load: "",
        label: "Выбрать файл на компьютере",
        error: "",
    }));
    render(".form__wrap_buttons", new Button({
        name: "submit_btn",
        text: "Поменять",
        classList: "button",
    }));
})();
//# sourceMappingURL=load-file.js.map