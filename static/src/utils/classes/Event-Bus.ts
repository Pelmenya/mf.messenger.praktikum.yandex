const EventBusClass = (() => {
  class EventBus {
    listeners: Listeners;

    constructor() {
      this.listeners = {};
    }

    public on(event: string, callback: Function) {
      if (!(`${event}` in this.listeners)) this.listeners[`${event}`] = [];
      this.listeners[`${event}`].push(callback);
    }

    public off(event: string, callback: Function) {
      if (event in this.listeners)
        this.listeners[`${event}`].splice(
          this.listeners[`${event}`].findIndex((item) => item === callback),
          1
        );
      else throw Error(`Нет события: ${event}`);
    }

    public emit(event: string, ...args: any) {
      if (event in this.listeners)
        this.listeners[`${event}`].forEach((callback) => callback(...args));
      else throw Error(`Нет события: ${event}`);
    }
  }

  return { EventBus };
})();
