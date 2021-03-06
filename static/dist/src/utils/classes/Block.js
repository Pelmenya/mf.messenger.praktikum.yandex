"use strict";
const BlockClass = (() => {
    const { INIT, FLOW_CDM, FLOW_CDU, FLOW_RENDER } = EVENTS;
    const { EventBus } = EventBusClass;
    class Block {
        /** JSDoc
       * @param {string} tagName
       * @param {Object} props
       *
       * @returns {void}
       */
        constructor(tagName = "div", props) {
            this.setProps = (nextProps) => {
                if (!nextProps) {
                    return;
                }
                Object.assign(this.props, nextProps);
            };
            const eventBus = new EventBus();
            this.meta = {
                tagName,
                props,
            };
            this.props = this.makePropsProxy(props);
            this._element = null;
            this.eventBus = () => eventBus;
            this.registerEvents(eventBus);
            eventBus.emit(INIT);
        }
        registerEvents(eventBus) {
            eventBus.on(INIT, this.init.bind(this));
            eventBus.on(FLOW_CDM, this._componentDidMount.bind(this));
            eventBus.on(FLOW_CDU, this._componentDidUpdate.bind(this));
            eventBus.on(FLOW_RENDER, this._render.bind(this));
        }
        createResources() {
            const { tagName } = this.meta;
            this._element = this.createDocumentElement(tagName);
        }
        init() {
            this.createResources();
            this.eventBus().emit(EVENTS.FLOW_CDM);
        }
        _componentDidMount() {
            this._render();
            this.show();
            this.componentDidMount({});
        }
        componentDidMount(oldProps) {
            return oldProps;
        }
        _componentDidUpdate(oldProps, newProps) {
            const response = this.componentDidUpdate(oldProps, newProps);
            if (response)
                this._render();
        }
        componentDidUpdate(oldProps, newProps) {
            return oldProps.text !== newProps.text ? true : false;
        }
        get element() {
            return this._element;
        }
        _render() {
            const block = this.render();
            if (this._element !== null)
                this._element.innerHTML = block;
        }
        render() {
            return "";
        }
        getContent() {
            return this.element;
        }
        makePropsProxy(props) {
            const self = this;
            const proxyProps = new Proxy(props, {
                get(props, prop) {
                    return props[String(prop)];
                },
                set(props, prop, val) {
                    const oldProps = {};
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
        createDocumentElement(tagName) {
            return document.createElement(tagName);
        }
        show() {
            if (this._element !== null)
                this._element.style.display = "block";
        }
        hide() {
            if (this._element !== null)
                this._element.style.display = "none";
        }
    }
    return { Block };
})();
//# sourceMappingURL=Block.js.map