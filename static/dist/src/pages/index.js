"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const { Form } = FormClass;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(formSignIn.tmpl)());
    const formContainer = document.querySelector(".form__signin");
    if (formContainer !== null) {
        const form = new Form({
            container: formContainer,
        });
        form.create();
    }
    render(".form__wrap_buttons", new Button({
        name: "submit_btn",
        text: "Авторизоваться",
        classList: "button",
    }));
    render(".form__wrap_buttons", new Button({
        name: "link",
        text: "Нет аккаунта?",
        classList: "form__button-link",
    }));
})();
//# sourceMappingURL=index.js.map