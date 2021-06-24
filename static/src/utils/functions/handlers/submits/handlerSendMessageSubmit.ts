import { ERRORS } from "../../../../const/errors.js";
import { TypeSocketData } from "../../../../const/typeSocketData.js";
import { Options } from "../../../../types/Options.js";
import DataWebSocket from "../../../classes/DataWebSocket.js";

export default function handlerSendMessageSubmit(options: Options, socket: DataWebSocket) {
  return new Promise((resolve, reject) => {
    const { data } = options;
    console.log(data);

   
    if (socket.dataWebSocket !== null) {
      socket.dataWebSocket.send(
        JSON.stringify({ content: `${data.message}`, type: TypeSocketData.TEXT })
      );

      console.log(socket.messages);
      resolve("23");
    } else {
      reject(ERRORS.ERROR_SEND_MESSAGE);
    }
  });
}
