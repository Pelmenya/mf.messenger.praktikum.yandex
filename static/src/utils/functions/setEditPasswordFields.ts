import { store } from "../store/storeObj.js";
import getElementFromStore from "./getElementFromStore.js";

export default function setEditPasswordFields(){
  const userPassword = getElementFromStore(
    store,
    "myAccountPasswordProps",
    "userPasswordFields"
  );
  userPassword.setProps({ oldPassword: "", newPassword: "" });
  userPassword.create();
}