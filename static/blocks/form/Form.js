class Form extends ElementsListeners {
  // Защищенные методы
  // Добавление слушателей для inputs
  _initalInputsListeners() {
    Object.keys(this.inputs).forEach((index) => {
      this.inputs[index].addEventListener("input", this._handlerEntryInput);
    });
  }

  // очистка отображения ошибок
  _clearErrorLabel() {
    Object.keys(this.inputs).forEach((index) => {
      this.form.querySelector(`.form__error_${this.inputs[index].name}`).textContent = "";
    });
  }

  // Валидация инпута с отображением ошибок
  _validInput(input, errorLabel, ERROR_DESCRIPTION) {
    this.input = input;
    if (this.input.value.length === 0) {
      errorLabel.textContent = ERROR_REQUIRED_FIELD;
    } else if (!this.input.checkValidity()) {
      errorLabel.textContent = ERROR_DESCRIPTION;
    } else {
      errorLabel.textContent = "";
      return true;
    }
    return false;
  }

  // обработчик ввода в input
  _handlerEntryInput(event) {
    const error = this.form.querySelector(`.form__error_${event.target.name}`);
    error.textContent = "";
    let errorStr = "";
    if (event.target.type === "text") errorStr = this.ERROR_TEXT;
    if (event.target.type === "email") errorStr = this.ERROR_EMAIL;
    if (event.target.type === "password") errorStr = this.ERROR_PASSWORD;
    if (event.target.type === "tel") errorStr = this.ERROR_TEL;
    this._validInput(event.target, error, errorStr);
  }

  // обработчик ввода в form
  _handlerInputForm() {
    this.form.querySelector(".button").disabled = true;

    const valid = !Object.keys(this.inputs).some(
      (index) => !this.inputs[index].checkValidity() || this.inputs[index].value === ""
    );

    if (valid) this.form.querySelector(".button").disabled = false;
  }

  // Сброс в начальное состояние формы
  _formReset() {
    this.form.reset();
    this._clearErrorLabel();
  }

  // Возвращает объект из полей input
  _getInfo() {
    const item = {};
    Object.keys(this.inputs).forEach((index) => {
      item[`${this.inputs[index].name}`] = this.inputs[index].value;
    });
    return item;
  }

  _disabledForm() {
    Object.keys(this.form.elements).forEach((item) => {
      this.form.elements[item].disabled = true;
    });
  }

  _enabledForm() {
    Object.keys(this.form.elements).forEach((item) => {
      this.form.elements[item].disabled = false;
    });
  }

  constructor(props, container, handlerSubmit = null) {
    super(props);

    this.container = container;
    this.handlerSubmit = handlerSubmit;

    // текст ошибок в input
    this.ERROR_TEXT = ERROR_TEXT;
    this.ERROR_EMAIL = ERROR_EMAIL;
    this.ERROR_PASSWORD = ERROR_PASSWORD;
    this.ERROR_TEL = ERROR_TEL;

    this.form = this.container.querySelector(".form");
    this.inputs = this.form.querySelectorAll(".input");

    this.submitForm = this.submitForm.bind(this);
    this._handlerEntryInput = this._handlerEntryInput.bind(this);
    this._handlerInputForm = this._handlerInputForm.bind(this);

    this.form.addEventListener("input", this._handlerInputForm);
    this.form.addEventListener("submit", this.submitForm);
    // Делаем при нажатии кнопки формы
    this.handlerSubmit = handlerSubmit;
  }

  create() {
    this.addListeners();
    this._formReset();
    this._initalInputsListeners();
  }

  submitForm(event) {
    //this._disabledForm();
    this.handlerSubmit(this._getInfo());
    this.container.clear();
    this.container.close();
    event.preventDefault();
  }
}
