import Popup from "../../../../blocks/popup/Popup.js";
import { Options } from "../../../types/Options.js";
import { chatsAPI } from "../../api/ChatsApi.js";
import { store } from "../../store/storeObj.js";
import getElementFromStore from "../getElementFromStore.js";

export default function handlerAddChatSubmit(options: Options) {
  return chatsAPI
    .createChat(options)
    .then((data) => {
      if (data.status === 200) {
        console.log(store)
        const addChatPopupElement: Popup = getElementFromStore(store, "chatsProps", "add_chat");
        console.log(addChatPopupElement)
        if (addChatPopupElement !== null) addChatPopupElement.hide();
      } else {
        const obj = JSON.parse(data.response);
        return obj.reason;
      }
    })
    .catch((err) => console.log(err));
}
