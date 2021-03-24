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
            if (routeUrl === ROUTES.ROOT) router.start();
            else if (routeUrl === ROUTES.SIGNUP) {
              console.log(routeUrl);
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
          for (let key in data) {
            currentUser[key] = data[key];
          }
          this.putToStore(store, currentUser, "currentUser");
          if (!isDataEmptyInStore("currentUser")) {
            router.go(ROUTES.CHATS);
          }
        }
      })
      .catch((err) => console.log(err));
  };
}

export const controller = new Controller();
