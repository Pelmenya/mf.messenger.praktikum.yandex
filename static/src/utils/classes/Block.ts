import { EVENTS } from "../../const/events.js";
import BlockProps from "../../types/BlockProps.js";
import { Nullable } from "../../types/Nullable.js";
import EventBus from "./Event-Bus.js";

export default class Block<Props extends BlockProps> {
  private _element: Nullable<HTMLElement>;
  private eventBus: EventBus;
  props: Props;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props: Props) {
    const eventBus = new EventBus();

    this.props = this.makePropsProxy(props);

    this._element = null;
    this.eventBus = eventBus;
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
    const { tagNameBlock, classListBlock } = this.props;
    this._element = this.createDocumentElement(tagNameBlock);
    if (classListBlock)
      classListBlock.forEach((item) => {
        if (this._element !== null) this._element.classList.add(item);
      });
  }

  init() {
    this.createResources();
    this.eventBus.emit(EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this._render();
    this.show();
    this.componentDidMount({} as Props);
  }

  public componentDidMount(oldProps: Props) {
    return oldProps;
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) this._render();
  }

  public componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps.text !== newProps.text;
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

  private makePropsProxy(props: any) {
    const self = this;
    const proxyProps = new Proxy(props, {
      get(props, prop) {
        return props[prop];
      },

      set(props, prop, val: string) {
        const oldProps = {};
        Object.assign(oldProps, props);
        props[prop] = val;
        self.eventBus.emit(EVENTS.FLOW_CDU, oldProps, props);
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
    if (this._element !== null) {
      const { displayBlock } = this.props;
      displayBlock
        ? (this._element.style.display = displayBlock)
        : (this._element.style.display = "block");
    }
  }

  hide() {
    if (this._element !== null) this._element.style.display = "none";
  }
}
