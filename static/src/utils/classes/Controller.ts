import { Nullable } from "../../types/Nullable.js";
import { authApi } from "../api/AuthAPI.js";
import { currentUser } from "../../const/objects/currentUser.js";
import { signInProps } from "../../const/objects/signInProps.js";
import { signUpProps } from "../../const/objects/signUpProps.js";
import Store from "../store/Store.js";
import { store } from "../store/storeObj.js";
import { chatsProps } from "../../const/objects/chatsProps.js";

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
  }
  
  setCurrentUserProps = () => {
    authApi
      .getCurrentUser()
      .then((data) => {
        if (data !== null) Object.assign(currentUser, data);
      })
      .catch((err) => console.log(err));
    this.putToStore(store, currentUser, "currentUser");
  };
}

export const controller = new Controller();
