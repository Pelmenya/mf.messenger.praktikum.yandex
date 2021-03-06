"use strict";
const EventBusClass = (() => {
    class EventBus {
        constructor() {
            this.listeners = {};
        }
        on(event, callback) {
            if (!(`${event}` in this.listeners))
                this.listeners[`${event}`] = [];
            this.listeners[`${event}`].push(callback);
        }
        off(event, callback) {
            if (event in this.listeners)
                this.listeners[`${event}`].splice(this.listeners[`${event}`].findIndex((item) => item === callback), 1);
            else
                throw Error(`Нет события: ${event}`);
        }
        emit(event, ...args) {
            if (event in this.listeners)
                this.listeners[`${event}`].forEach((callback) => callback(...args));
            else
                throw Error(`Нет события: ${event}`);
        }
    }
    return { EventBus };
})();
//# sourceMappingURL=Event-Bus.js.map