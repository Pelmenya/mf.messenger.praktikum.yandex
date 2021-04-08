import { store } from "../store/storeObj.js";
import getDataFromStore from "./getDataFromStrore.js";
import getElementFromStore from "./getElementFromStore.js";

export default function setEditUserFields() {
  const userData = getElementFromStore(store, "myAccountDataProps", "userDataFields");
  userData.setProps({ currentUserProps: getDataFromStore("currentUser") });
  userData.create();
}
