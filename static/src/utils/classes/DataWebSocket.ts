import PART_OF_MESSAGES from "../../const/consts.js";
import { EVENTS } from "../../const/events.js";
import { TypeSocketData } from "../../const/typeSocketData.js";
import { Nullable } from "../../types/Nullable.js";
import EventBus from "./Event-Bus.js";

interface DataWebSocketProps {
  path: string;
}

export default class DataWebSocket {
  public dataWebSocket: Nullable<WebSocket>;
  public props: DataWebSocketProps;
  public messages: Array<any>;
  public count: number;
  private eventBus: EventBus;

  constructor(props: DataWebSocketProps) {
    const eventBus = new EventBus();

    this.eventBus = eventBus;

    this.dataWebSocket = null;
    this.props = props;
    this.messages = [];
    this.count = 0;

    this.createResource(eventBus);
  }

  public create = () => {
    this.dataWebSocket = new WebSocket(this.props.path);
    this.listen();
  };

  public createResource(eventBus: EventBus): void {
    eventBus.on(EVENTS.OPEN_SOCKET, this.openSocket);
    eventBus.on(EVENTS.MESSAGE_SOKET, this.messageSocket);
    eventBus.on(EVENTS.ERROR_SOCKET, this.errorSocket);
  }

  public listen() {
    this.eventBus.emit(EVENTS.OPEN_SOCKET);
    this.eventBus.emit(EVENTS.MESSAGE_SOKET);
    this.eventBus.emit(EVENTS.ERROR_SOCKET);
  }

  public closeSocket = () => {
    if (this.dataWebSocket !== null) {
      this.dataWebSocket.close();
      this.dataWebSocket = null;
    }
  };

  public getAllOldMessages = () => {
    if (this.dataWebSocket !== null && this.messages.length === 0) {
      this.dataWebSocket.send(
        JSON.stringify({ content: `${this.count}`, type: TypeSocketData.GET_OLD })
      );
    }
  };

  public openSocket = () => {
    if (this.dataWebSocket !== null) {
      this.dataWebSocket.addEventListener("open", this.getAllOldMessages);
    }
  };

  public messageSocket = () => {
    if (this.dataWebSocket !== null) {
      this.dataWebSocket.addEventListener("message", (event: MessageEvent) => {
        if (event instanceof MessageEvent) {
          const data = JSON.parse(event.data);
          if (data.length < PART_OF_MESSAGES) {
            this.messages = this.messages.concat(data);
          } else {
            this.messages = this.messages.concat(data);
            this.count = this.count + data.length;
            if (this.dataWebSocket !== null) {
              this.dataWebSocket.send(
                JSON.stringify({ content: `${this.count}`, type: TypeSocketData.GET_OLD })
              );
            }
          }
        }
      });
    }
  };

  public errorSocket = () => {
    if (this.dataWebSocket !== null) {
      this.dataWebSocket.addEventListener("error", (error: Event) => {
        if (error instanceof Error) {
          alert(error.message);
        }
      });
    }
  };
}
