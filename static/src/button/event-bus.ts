

interface Listeners {
  [key: string] : Array<Function>
}

class EventBus {
  listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Function) {
    //Код здесь
    if (!(`${event}` in this.listeners)) this.listeners[`${event}`] = [];
    this.listeners[`${event}`].push(callback);
  }

  off(event: string, callback: Function) {
    if (event in this.listeners)
      this.listeners[`${event}`].splice(
        this.listeners[`${event}`].findIndex((item) => item === callback),
        1
      );
    else throw Error(`Нет события: ${event}`);
    //Код здесь
  }

  emit(event: string, ...args: any) {console.log(event)
    if (event in this.listeners)
      this.listeners[`${event}`].forEach((callback) => callback(...args));
    else throw Error(`Нет события: ${event}`);
    console.log(this.listeners)
      
  }
}
