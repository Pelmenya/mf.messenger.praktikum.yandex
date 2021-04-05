import { EVENTS } from "../../const/events.js";
import { PlainObject } from "../../types/PlainObject.js";
import { controller } from "../classes/Controller.js";
import EventBus from "../classes/Event-Bus.js";


export default class Store{
  public objects: PlainObject<any>;
  private eventBus: EventBus;
  
  constructor(){
    const eventBus = new EventBus();
  
    this.objects = {};

    this.eventBus = eventBus;

    this.createResource(eventBus); 
  }

  public createResource(eventBus: EventBus):void{
    eventBus.on(EVENTS.PUT_STORE, controller.setCurrentUserProps)
    eventBus.on(EVENTS.PUT_STORE, controller.setSignInProps)
    eventBus.on(EVENTS.PUT_STORE, controller.setSignUpProps)
    eventBus.on(EVENTS.PUT_STORE, controller.setChatsProps)
    eventBus.on(EVENTS.PUT_STORE, controller.setErrorProps)
  }

  public listen(){
    this.eventBus.emit(EVENTS.PUT_STORE);
  }
}


