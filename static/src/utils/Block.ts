const { INIT, FLOW_CDM, FLOW_CDU, FLOW_RENDER } = EVENTS;

class Block {
  private _element: Nullable<HTMLElement>;
  private meta: Meta;
  private eventBus: Function;
  props: Props;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = "div", props: Props) {
    const eventBus = new EventBus();

    this.meta = {
      tagName,
      props,
    };

    this.props = this.makePropsProxy(props);

    this._element = null;
    this.eventBus = () => eventBus;
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

  public componentDidMount(oldProps: Props) {
    return oldProps;
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) this._render();
  }

  public componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps.text !== newProps.text ? true : false;
  }

  setProps = (nextProps: Props) => {
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
    if (this._element !== null) this._element.innerHTML = block;
  }

  public render(): string {
    return "";
  }

  getContent() {
    return this.element;
  }

  private makePropsProxy(props: Props) {
    const self = this;
    const proxyProps = new Proxy(props, {
      get(props, prop) {
        return props[String(prop)];
      },

      set(props, prop, val: string) {
        const oldProps: Props = {};
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
    return document.createElement(tagName);
  }

  show() {
    if (this._element !== null) this._element.style.display = "block";
  }

  hide() {
    if (this._element !== null) this._element.style.display = "none";
  }
}
