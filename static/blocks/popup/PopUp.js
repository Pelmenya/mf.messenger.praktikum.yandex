class PopUp extends Element {
  _closePopup() {
    this.removeEventsListeners();
    this.close();
  }
  constructor(props) {
    super(props);
    this.closeClick = this.closeClick.bind(this);
    this.closeKeyDown = this.closeKeyDown.bind(this);
  }

  create() {
    this.addEventsListeners();
  }

  addEventsListeners() {
    this.element.addEventListener("mousedown", this.closeClick);
    window.addEventListener("keydown", this.closeKeyDown);
  }

  removeEventsListeners() {
    this.element.removeEventListener("mousedown", this.closeClick);
    window.removeEventListener("keydown", this.closeKeyDown);
  }

  closeClick(event) {
    if (
      event.target.classList.value === this.element.classList.value ||
      event.target.classList.value === `${this.element.classList[0]}__content`
    ) {
      this._closePopup();
    }
  }

  closeKeyDown(event) {
    if (event.key === "Escape") {
      this._closePopup();
    }
  }
}
