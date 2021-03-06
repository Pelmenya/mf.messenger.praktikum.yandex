const ERRORS = (() => {
  const ERROR_TEXT: string = 'Должно быть от 2 до 30 символов';
  const ERROR_EMAIL: string = 'Неправильный формат email';
  const ERROR_PASSWORD: string = 'Неправильный пароль. Должен быть не меньше 6 символов';
  const ERROR_PASSWORDS: string = "Пароли не совпадают"
  const ERROR_TEL: string = 'Неправильный телефон. Запишите в формате +7(925)900-90-90';
  const ERROR_REQUIRED_FIELD: string = 'Это обязательное поле';

  return { ERROR_TEXT, ERROR_EMAIL, ERROR_PASSWORD, ERROR_PASSWORDS, ERROR_TEL, ERROR_REQUIRED_FIELD };
})();
