

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
    constructor(props: PropsButton) {
      // Создаём враппер дом-элемент button
      super("button", props);
    }
  
    render() {
      // В проекте должен быть ваш собственный шаблонизатор
      return `<div>${this.props.text}</div>`;
    }
  }
  
  function render(query:string, block: Button) {
    const root: Nullable<HTMLElement> = document.querySelector(query);
    if (root !== null)  root.appendChild(block.getContent() as HTMLElement);
    return root;
  }
  
  const button = new Button({
      text: 'Click me',
  });
  
  
  //app — это id дива в корне DOM
  render(".form__signin", button);
  
  // Через секунду контент изменится сам, достаточно обновить пропсы
  setTimeout(() => {
    button.setProps({
      text: 'Click me, please Dmitry',
    });
  }, 1000);
})();
