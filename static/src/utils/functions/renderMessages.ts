import { TYPE_SOCKET_DATA } from "../../const/typeSocketData.js";
import MyTextMessage from "../../template-parts/chats/MyTextMessage.js";
import TalkerTextMessage from "../../template-parts/chats/TalkerTextMessage.js";
import getDataFromStore from "./getDataFromStrore.js";

export default function renderMessages(messages: Array<any>, container: HTMLElement) {
  const userId = getDataFromStore("currentUser").id;
  messages.forEach((item) => {
    if (item.type === TYPE_SOCKET_DATA.TEXT) {
      if (userId === item.user_id) {
        const block = new MyTextMessage({
          tagNameBlock: "div",
          classListBlock: [
            "messages-list__wrap-row",
            "messages-list__align-end",
          ],
          message: item.content,
          time: item.time.slice(11, 16),
        });
        container.appendChild(block.getContent() as HTMLElement);
      } else {
        const block = new TalkerTextMessage({
          tagNameBlock: "div",
          classListBlock: [
            "messages-list__wrap-row",
            "messages-list__align-start",
          ],
          message: item.content,
          time: item.time.slice(11, 16),
        });
        container.appendChild(block.getContent() as HTMLElement);
      }
    }
  });

  //container.scrollTo({container.scrollHeight})
}
