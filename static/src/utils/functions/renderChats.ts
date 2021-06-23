import Card from "../../../blocks/card/Card.js";
import { ROUTES } from "../../const/routes.js";
import { TypeSocketData } from "../../const/typeSocketData.js";
import { Nullable } from "../../types/Nullable.js";
import { Options } from "../../types/Options.js";
import { RendersBlocks } from "../../types/RendersBlocks.js";
import { chatsAPI } from "../api/ChatsAPI.js";
import { router } from "../classes/Router.js";
import clearContainer from "./clearContainer.js";
import getDataFromStore from "./getDataFromStrore.js";
import getDateOfMessages from "./getDateOfMessages.js";
import render from "./render.js";
import setTokensAndSokets from "./setTokensAndSockets.js";

export default function renderChats() {
  chatsAPI
    .getChats({ data: { offset: 0, limit: 100 } } as Options)
    .then((data) => {
      const chatsProps = getDataFromStore("chatsProps");
      let arr: RendersBlocks = [];
      const arrChats = JSON.parse(data.response);

      arrChats.forEach((chat: any, index: number) => {
        let lastMessage = "";
        let lastMessageDate = "";
        let dateTime = "";
        if (chat.last_message !== null) {
          const chatLastMessage = JSON.parse(chat.last_message);
          if ((chatLastMessage.type = TypeSocketData.TEXT)) {
            lastMessage = chatLastMessage.content;
            lastMessageDate = getDateOfMessages(chatLastMessage.time.slice(0, 10));
            dateTime = chatLastMessage.time.slice(0, 10);
          }
        }
        arr.push({
          query: ".chats-list__container",
          block: new Card({
            tagNameBlock: "div",
            classListBlock: [
              "card",
            ],
            tabIndex: index + 2,
            displayBlock: "flex",
            title: chat.title,
            name: `${chat.title}${Math.random()}`,
            last_message: lastMessage,
            date: lastMessageDate,
            datetime: dateTime,
            unread_count: chat.unread_count,
            id: chat.id,
            token: null,
            socket: null,
          }),
        });
      });

      router.go(ROUTES.CHATS);
      const container: Nullable<HTMLElement> = document.querySelector(".chats-list__container");
      if (container != null) {
        clearContainer(container);
        render(arr);
      }

      chatsProps.elements = chatsProps.elements.filter((item: any) => {
        return !(item.block instanceof Card);
      });

      chatsProps.elements = [
        ...chatsProps.elements,
        ...arr,
      ];

      setTokensAndSokets();
    })
    .catch((err) => console.log(err));
}
