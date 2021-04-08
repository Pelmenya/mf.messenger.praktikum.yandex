import { store } from "../store/storeObj.js";
import getDataFromStore from "./getDataFromStrore.js";
import getElementFromStore from "./getElementFromStore.js";

export default function setUserFields() {
  const user = getElementFromStore(store, "myAccountProps", "userFields");
  user.setProps({ currentUserProps: getDataFromStore("currentUser") });
}
