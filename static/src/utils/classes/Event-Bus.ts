import { EVENTS } from "../../const/events.js";
import Listeners from "../../types/Listeners.js";

  export default class EventBus {
    listeners: Listeners;

    constructor() {
      this.listeners = {};
    }

    public on(event: EVENTS, callback: Function) {
      if (!(`${event}` in this.listeners)) this.listeners[`${event}`] = [];
      this.listeners[`${event}`].push(callback);
    }

    public off(event: EVENTS, callback: Function) {
      if (event in this.listeners)
        this.listeners[`${event}`].splice(
          this.listeners[`${event}`].findIndex((item) => item === callback),
          1
        );
      else throw Error(`Нет события: ${event}`);
    }

    public emit(event: EVENTS, ...args: any) {
      if (event in this.listeners)
        this.listeners[`${event}`].forEach((callback) => callback(...args));
      else throw Error(`Нет события: ${event}`);
    }
  }
