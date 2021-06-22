import PART_OF_MESSAGES from "../../const/consts.js";
import { TypeSocketData } from "../../const/typeSocketData.js";
import { Nullable } from "../../types/Nullable.js";

interface DataWebSocketProps {
  path: string;
}

export default class DataWebSocket {
  public dataWebSocket: Nullable<WebSocket>;
  public props: DataWebSocketProps;
  public messages: Array<any>;
  public count: number;
  public flag: boolean;

  constructor(props: DataWebSocketProps) {
    this.dataWebSocket = null;
    this.props = props;
    this.messages = [];
    this.count = 0;
    this.flag = true;
  }

  public create = () => {
    this.dataWebSocket = new WebSocket(this.props.path);
    this.addSocketListeners();
  };

  public destroy = () => {
    if (this.dataWebSocket !== null) {
      this.dataWebSocket.close();
      this.dataWebSocket = null;
    }
  };

  public addSocketListeners = () => {
    if (this.dataWebSocket !== null) {
      this.dataWebSocket.addEventListener("open", () => {
        if (this.dataWebSocket !== null) {
          this.dataWebSocket.send(
            JSON.stringify({ content: `${this.count}`, type: TypeSocketData.GET_OLD })
          );
        }
      });

      this.dataWebSocket.addEventListener("close", () => {});

      this.dataWebSocket.addEventListener("message", (event: MessageEvent) => {
        if (event instanceof MessageEvent) {
          const data = JSON.parse(event.data);
          if (data.length < PART_OF_MESSAGES) {
            this.flag = false;
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

      this.dataWebSocket.addEventListener("error", (error: Event) => {
        if (error instanceof Error) {
        }
      });
    }
  };
}
