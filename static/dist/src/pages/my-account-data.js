"use strict";
(() => {
    const { render } = renderFunction;
    const { Button } = ButtonClass;
    const { Form } = FormClass;
    const { PATTERN_EMAIL, PATTERN_PHONE } = PATTERNS;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(myAccount.tmpl)({
        disabled: "",
        menu: "",
        phone: PATTERN_PHONE,
        email: PATTERN_EMAIL,
    }));
    const formContainer = document.querySelector(".account__form");
    if (formContainer !== null) {
        const form = new Form({
            container: formContainer,
        });
        form.create();
    }
    render(".account__wrap-col_buttons", new Button({
        name: "submit_btn",
        text: "Сохранить",
        classList: "button account__save-data",
    }));
})();
//# sourceMappingURL=my-account-data.js.map