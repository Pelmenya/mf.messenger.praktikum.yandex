enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

interface PropsButton {
  [text: string]: string;
}

interface Meta {
  tagName: string;
  props: PropsButton;
}

class Block {
  private _element: Nullable<HTMLElement>;
  private meta: Meta;
  private eventBus: Function;
  props: PropsButton;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = "span", props: PropsButton) {
    const eventBus = new EventBus();
    this.meta = {
      tagName,
      props,
    };

    console.log(this.meta);

    this.props = this.makePropsProxy(props);

    this._element = null;
    this.eventBus = () => eventBus;
    console.log(this.eventBus);
    this.registerEvents(eventBus);

    eventBus.emit(EVENTS.INIT);
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private createResources() {
    const { tagName } = this.meta;
    this._element = this.createDocumentElement(tagName);
  }

  init() {
    this.createResources();
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this._render();
    this.show();
    this.componentDidMount({});
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidMount(oldProps: PropsButton) {
    return oldProps;
  }

  private _componentDidUpdate(oldProps: PropsButton, newProps: PropsButton) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) this._render();
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidUpdate(oldProps: PropsButton, newProps: PropsButton) {
    return oldProps.text !== newProps.text ? true : false;
  }

  setProps = (nextProps: PropsButton) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block: string = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    if (this._element !== null) this._element.innerHTML = block;
  }

  // Может переопределять пользователь, необязательно трогать
  public render(): string {
    return "";
  }

  getContent() {
    return this.element;
  }

  private makePropsProxy(props: PropsButton) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;
    console.log(this);
    const proxyProps = new Proxy(props, {
      get(props, prop) {
        return props[String(prop)];
      },

      set(props, prop, val: string) {
        const oldProps: PropsButton = {};
        Object.assign(oldProps, props);
        props[String(prop)] = val;
        self.eventBus().emit(EVENTS.FLOW_CDU, oldProps, props);
        return true;
      },

      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });

    return proxyProps;
  }

  private createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    if (this._element !== null) this._element.style.display = "block";
  }

  hide() {
    if (this._element !== null) this._element.style.display = "none";
  }
}
