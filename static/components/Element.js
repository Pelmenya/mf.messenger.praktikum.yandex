class Element {
  constructor(props) {
    this.element = props.element;
    this.classOpened = props.classOpened;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    if (this.classOpened) this.element.classList.add(this.classOpened);
  }

  close() {
    if (this.classOpened) this.element.classList.remove(this.classOpened);
  }

  clear(){
    while (this.element.firstChild) {
      this.element.removeChild(this.element.lastChild);
    }
  }

  addEventListener(event, callBack) {
    this.element.addEventListener(event, callBack);
  }

  removeEventListeners(event, callBack) {
    this.element.removeEventListener(event, callBack);
  }

  querySelector(classesList) {
    return this.element.querySelector(classesList);
  }

  setTextContent(content) {
    this.element.textContent = content;
  }

  blur() {
    this.element.blur();
  }

  appendChild(template){
    this.element.appendChild(template);
  }
}