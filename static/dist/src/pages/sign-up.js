"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const { Form } = FormClass;
    const { PATTERN_EMAIL, PATTERN_PHONE } = PATTERNS;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(formSignUp.tmpl)({
        phone: PATTERN_PHONE,
        email: PATTERN_EMAIL,
    }));
    const formContainer = document.querySelector(".form__signup");
    if (formContainer !== null) {
        const form = new Form({
            container: formContainer,
        });
        form.create();
    }
    render(".form__wrap_buttons", new Button({
        name: "submit_btn",
        text: "Зарегистрироваться",
        classList: "button",
    }));
    render(".form__wrap_buttons", new Button({
        name: "link",
        text: "Войти",
        classList: "form__button-link",
    }));
})();
//# sourceMappingURL=sign-up.js.map