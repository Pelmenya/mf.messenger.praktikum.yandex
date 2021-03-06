"use strict";
const FormClass = (() => {
    const { ERROR_TEXT, ERROR_EMAIL, ERROR_PASSWORD, ERROR_PASSWORDS, ERROR_TEL, ERROR_REQUIRED_FIELD, } = ERRORS;
    class Form {
        constructor(props) {
            this.handlerInputInput = (event) => {
                if (event.target instanceof HTMLInputElement) {
                    if (event.target.previousElementSibling !== null)
                        if (event.target.previousElementSibling.classList.contains("form__label"))
                            if (event.target.value !== "")
                                event.target.previousElementSibling.classList.remove("form__label_hidden");
                            else
                                event.target.previousElementSibling.classList.add("form__label_hidden");
                }
            };
            this.handlerFocusInput = (event) => {
                if (event.target instanceof HTMLInputElement) {
                    if (event.target.nextElementSibling !== null)
                        if (event.target.nextElementSibling.classList.contains("form__error")) {
                            event.target.nextElementSibling.classList.remove("form__error_is-opened");
                            event.target.nextElementSibling.textContent = "";
                        }
                }
            };
            this.handlerBlurInput = (event) => {
                if (event.target instanceof HTMLInputElement) {
                    if (event.target.nextElementSibling !== null)
                        if (event.target.nextElementSibling.classList.contains("form__error")) {
                            if (!this.validateInput(event.target, event.target.nextElementSibling))
                                event.target.nextElementSibling.classList.add("form__error_is-opened");
                        }
                }
            };
            this.handlerSubmitForm = (event) => {
                if (this.validatePasswords) {
                    if (this.validatePasswordsFields()) {
                        if (typeof this.handlerSubmit === "function")
                            this.handlerSubmit();
                    }
                    else
                        event.preventDefault();
                }
            };
            this.form = props.container;
            this.handlerSubmit = props.handlerSubmit;
            this.inputs = this.form.querySelectorAll(".input");
            this.validatePasswords = false;
        }
        getErrorDescription(type) {
            if (type === "text")
                return ERROR_TEXT;
            if (type === "email")
                return ERROR_EMAIL;
            if (type === "password")
                return ERROR_PASSWORD;
            if (type === "tel")
                return ERROR_TEL;
            return "";
        }
        validateInput(input, errorLabel) {
            if (input.value.length === 0) {
                errorLabel.textContent = ERROR_REQUIRED_FIELD;
            }
            else if (!input.checkValidity()) {
                errorLabel.textContent = this.getErrorDescription(input.type);
            }
            else {
                errorLabel.textContent = "";
                return true;
            }
            return false;
        }
        validatePasswordsFields() {
            let str = "";
            let flag = true;
            let valid = true;
            Object.keys(this.inputs).forEach((item) => {
                let input = this.inputs[Number(item)];
                if (input.type === "password" && input.name !== "old_password") {
                    if (input.nextElementSibling !== null)
                        if (input.nextElementSibling.classList.contains("form__error")) {
                            input.nextElementSibling.textContent = "";
                            input.nextElementSibling.classList.remove("form__error_is-opened");
                        }
                    if (flag) {
                        str = input.value;
                        flag = false;
                    }
                    else if (str !== input.value) {
                        if (input.nextElementSibling !== null)
                            if (input.nextElementSibling.classList.contains("form__error")) {
                                input.nextElementSibling.textContent = ERROR_PASSWORDS;
                                input.nextElementSibling.classList.add("form__error_is-opened");
                                valid = false;
                            }
                    }
                }
            });
            return valid;
        }
        create() {
            if (this.inputs !== null) {
                let countPasswordFields = 0;
                Object.keys(this.inputs).forEach((item) => {
                    if (this.inputs[Number(item)].type === "password" &&
                        this.inputs[Number(item)].name !== "old_password")
                        countPasswordFields += 1;
                    this.inputs[Number(item)].addEventListener("input", this.handlerInputInput);
                    this.inputs[Number(item)].addEventListener("focus", this.handlerFocusInput);
                    this.inputs[Number(item)].addEventListener("blur", this.handlerBlurInput);
                });
                if (countPasswordFields > 1)
                    this.validatePasswords = true;
            }
            if (this.form !== null) {
                this.form.addEventListener("submit", this.handlerSubmitForm);
            }
        }
    }
    return { Form };
})();
//# sourceMappingURL=Form.js.map