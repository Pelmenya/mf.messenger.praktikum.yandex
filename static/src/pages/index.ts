

(() => {
  const body: Nullable<HTMLBodyElement> = document.getElementsByTagName(
    "body"
  )[0] as HTMLBodyElement;

  body.insertAdjacentHTML("afterbegin", _.template(formSignIn.tmpl)());

  const formContainer: Nullable<HTMLFormElement> = document.querySelector(".form__signin");

  if (formContainer !== null) {
    const form = new Form({
      container: formContainer,
    });
    form.create();
  }

  class Button extends Block {
    constructor(props: Props) {
      super("div", props);
    }
    render() {
      return _.template(button.tmpl)(this.props);
    }
  }
  
  function render(query:string, block: Button) {
    const root: Nullable<HTMLElement> = document.querySelector(query);
    if (root !== null)  root.appendChild(block.getContent() as HTMLElement);
    return root;
  }
  
  const btn = new Button({
    name: "submit_btn",
    text: "Авторизоваться",
    classList: "button"
});
  
  
  render(".form__signin", btn);
  
  // Через секунду контент изменится сам, достаточно обновить пропсы
  setTimeout(() => {
    btn.setProps({
      text: 'Click me, please Dmitry',
    });
  }, 1000);
})();
