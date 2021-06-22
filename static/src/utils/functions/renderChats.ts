import Card from "../../../blocks/card/Card.js";
import { ROUTES } from "../../const/routes.js";
import { Options } from "../../types/Options.js";
import { RendersBlocks } from "../../types/RendersBlocks.js";
import { chatsAPI } from "../api/ChatsAPI.js";
import { router } from "../classes/Router.js";
import clearChats from "./clearChats.js";
import getDataFromStore from "./getDataFromStrore.js";
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
            last_message: chat.message,
            unread_count: chat.unread_count,
            id: chat.id,
            token: null,
            socket: null,
          }),
        });
      });

      router.go(ROUTES.CHATS);
      clearChats();
      render(arr);

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
