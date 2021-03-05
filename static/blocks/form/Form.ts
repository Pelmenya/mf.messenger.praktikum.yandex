interface FormProps {
  container: HTMLFormElement;
  handlerSubmit?: Nullable<Function>;
}

class Form {
  form: HTMLFormElement;
  handlerSubmit?: Nullable<Function>;
  inputs: NodeListOf<HTMLInputElement>;
  validatePasswords: boolean;

  private getErrorDescription(type: string): string {
    if (type === "text") return ERRORS.ERROR_TEXT;
    if (type === "email") return ERRORS.ERROR_EMAIL;
    if (type === "password") return ERRORS.ERROR_PASSWORD;
    if (type === "tel") return ERRORS.ERROR_TEL;
    return "";
  }

  private validateInput(input: HTMLInputElement, errorLabel: HTMLSpanElement): boolean {
    if (input.value.length === 0) {
      errorLabel.textContent = ERRORS.ERROR_REQUIRED_FIELD;
    } else if (!input.checkValidity()) {
      errorLabel.textContent = this.getErrorDescription(input.type);
    } else {
      errorLabel.textContent = "";
      return true;
    }
    return false;
  }

  private handlerInputInput = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.previousElementSibling !== null)
        if (event.target.previousElementSibling.classList.contains("form__label"))
          if (event.target.value !== "")
            event.target.previousElementSibling.classList.remove("form__label_hidden");
          else event.target.previousElementSibling.classList.add("form__label_hidden");
    }
  };

  private handlerFocusInput = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.nextElementSibling !== null)
        if (event.target.nextElementSibling.classList.contains("form__error")) {
          event.target.nextElementSibling.classList.remove("form__error_is-opened");
          event.target.nextElementSibling.textContent = "";
        }
    }
  };

  private handlerBlurInput = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.nextElementSibling !== null)
        if (event.target.nextElementSibling.classList.contains("form__error")) {
          if (!this.validateInput(event.target, event.target.nextElementSibling as HTMLSpanElement))
            event.target.nextElementSibling.classList.add("form__error_is-opened");
        }
    }
  };

  private validatePasswordsFields(): boolean {
    let str: string = "";
    let flag: boolean = true;
    Object.keys(this.inputs).forEach((item: string) => {
      let input: HTMLInputElement = this.inputs[Number(item)];
      if (input.type === "password" && input.name !== "old_password") {
        if (flag) {
          str = input.value;
          flag = false;
        } else if (str !== input.value) {
          if (input.nextElementSibling !== null)
            if (input.nextElementSibling.classList.contains("form__error")) {
              input.nextElementSibling.textContent = ERRORS.ERROR_PASSWORDS;
              input.nextElementSibling.classList.add("form__error_is-opened");
              return false;
            }
        }
      }
    });

    return true;
  }

  private handlerSubmitForm = (event: Event) => {
    if (this.validatePasswords)
      if (this.validatePasswordsFields())
        if (typeof this.handlerSubmit === "function") this.handlerSubmit();
        else event.preventDefault();
  };

  constructor(props: FormProps) {
    this.form = props.container;
    this.handlerSubmit = props.handlerSubmit;
    this.inputs = this.form.querySelectorAll(".input");
    this.validatePasswords = false;
  }

  create(): void {
    if (this.inputs !== null) {
      let countPasswordFields: number = 0;
      Object.keys(this.inputs).forEach((item: string) => {
        if (
          this.inputs[Number(item)].type === "password" &&
          this.inputs[Number(item)].name !== "old_password"
        )
          countPasswordFields += 1;
        this.inputs[Number(item)].addEventListener("input", this.handlerInputInput);
        this.inputs[Number(item)].addEventListener("focus", this.handlerFocusInput);
        this.inputs[Number(item)].addEventListener("blur", this.handlerBlurInput);
      });
      if (countPasswordFields > 1) this.validatePasswords = true;
    }
    if (this.form !== null) {
      this.form.addEventListener("submit", this.handlerSubmitForm);
    }
  }
}
