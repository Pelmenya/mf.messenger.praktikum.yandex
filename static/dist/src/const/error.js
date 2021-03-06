"use strict";
const ERRORS = (() => {
    const ERROR_TEXT = 'Должно быть от 2 до 30 символов';
    const ERROR_EMAIL = 'Неправильный формат email';
    const ERROR_PASSWORD = 'Неправильный пароль. Должен быть не меньше 6 символов';
    const ERROR_PASSWORDS = "Пароли не совпадают";
    const ERROR_TEL = 'Неправильный телефон. Запишите в формате +7(925)900-90-90';
    const ERROR_REQUIRED_FIELD = 'Это обязательное поле';
    return { ERROR_TEXT, ERROR_EMAIL, ERROR_PASSWORD, ERROR_PASSWORDS, ERROR_TEL, ERROR_REQUIRED_FIELD };
})();
//# sourceMappingURL=error.js.map