import { Nullable } from "../../types/Nullable.js";
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
import renderChats from "../functions/renderChats.js";
import { authAPI } from "../api/AuthAPI.js";
import { chatsSelectedProps } from "../../const/objects/chatsSelectedProps.js";
import { myAccountProps } from "../../const/objects/myAccountProps.js";

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

  setChatsSelectedProps = () => {
    this.putToStore(store, chatsSelectedProps, "chatsSelectedProps");
  };

  setMyaAccountProps = () => {
    this.putToStore(store, myAccountProps, "myAccountProps");
  };

  setCurrentUserProps = () => {
    authAPI
      .getCurrentUser()
      .then((data: any) => {
        const { status } = data;
        if (status !== undefined)
          if (status === 200) return JSON.parse(data.response);
        return null;
      })
      .then((data: CurrentUser) => {
        if (data !== null) {
          Object.assign(currentUser, data);
          this.putToStore(store, currentUser, "currentUser");
        }
      })
      .catch((err) => console.log(err));
  };
}

export const controller = new Controller();
