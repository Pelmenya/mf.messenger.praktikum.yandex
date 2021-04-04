import { Nullable } from "../../types/Nullable.js";
import { authApi } from "../api/AuthAPI.js";
import { currentUser } from "../../const/objects/currentUser.js";
import { signInProps } from "../../const/objects/signInProps.js";
import { signUpProps } from "../../const/objects/signUpProps.js";
import Store from "../store/Store.js";
import { store } from "../store/storeObj.js";
import { chatsProps } from "../../const/objects/chatsProps.js";
import CurrentUser from "../../types/CurrentUser.js";
import isDataEmptyInStore from "../functions/isDataEmptyInStore.js";
import { router } from "./Router.js";
import getUrlRoute from "../functions/getUrlRoute.js";
import { ROUTES } from "../../const/routes.js";
import { errorProps } from "../../const/objects/errorProps.js";
import { chatsAPI } from "../api/ChatsApi.js";
import Card from "../../../blocks/card/Card.js";
import render from "../functions/render.js";
import { RendersBlocks } from "../../types/RendersBlocks.js";

export default class Controller {
  private putToStore(store: Store, obj: Nullable<Object>, key: string) {
    store.objects[key] = obj;
  }

  setSignInProps = () => {
    this.putToStore(store, signInProps, "signInProps");
  };

  setSignUpProps = () => {
    this.putToStore(store, signUpProps, "signUpProps");
  };

  setChatsProps = () => {
    this.putToStore(store, chatsProps, "chatsProps");
    chatsAPI
      .getChats()
      .then((data) => {
        const res = JSON.parse(data.response);
        console.log(res);
        if (res.length > 0) {
          let arr: RendersBlocks = [];
          const arrChats = JSON.parse(data.response);
          arrChats.forEach((chat: any) => {
            arr.push({
              query: ".chats-list__container",
              block: new Card({
                tagNameBlock: "div",
                classListBlock: [
                  "card",
                ],
                displayBlock: "flex",
                title: chat.title,
                name: chat.title,
                last_message: chat.message,
                unread_count: chat.unread_count,
              }),
            });
          });
          render(arr);
          chatsProps.elements = [
            ...chatsProps.elements,
            ...arr,
          ];
          this.putToStore(store, chatsProps, "chatsProps");
        } else this.putToStore(store, chatsProps, "chatsProps");
      })
      .catch((err) => console.log(err));
  };

  setErrorProps = () => {
    this.putToStore(store, errorProps, "errorProps");
  };

  setCurrentUserProps = () => {
    authApi
      .getCurrentUser()
      .then((data: any) => {
        console.log(data);
        const { status } = data;
        if (status !== undefined)
          if (status === 200) return JSON.parse(data.response);
          else {
            const routeUrl = getUrlRoute(window);
            console.log(routeUrl);
            if (routeUrl === ROUTES.SIGNIN) router.start();
            else if (routeUrl === ROUTES.SIGNUP) {
              router.start();
              router.go(ROUTES.SIGNUP);
            } else {
              router.start();
              router.go(ROUTES.ERROR);
            }
          }
        return null;
      })
      .then((data: CurrentUser) => {
        if (data !== null) {
          Object.assign(currentUser, data);
          this.putToStore(store, currentUser, "currentUser");
          if (!isDataEmptyInStore("currentUser")) {
            console.log(store);
            router.go(ROUTES.CHATS);
          }
        }
      })
      .catch((err) => console.log(err));
  };
}

export const controller = new Controller();
