import HTTPTransport from "../classes/HTTPTransport.js";
import BaseAPI from "./BaseAPI.js";
import { URLS_API } from "../../const/urlsApi.js";
import { Options } from "../../types/Options.js";

const chatsAPIInstance = new HTTPTransport(`${URLS_API.BASE}${URLS_API.CHATS}`);

export default class ChatsAPI extends BaseAPI {
  getChats() {
    return chatsAPIInstance.get(URLS_API.GET_CHATS);
  }

  createChat(options: Options) {
    return chatsAPIInstance.post(URLS_API.CREATE_CHAT, options);
  }
}

export const chatsAPI = new ChatsAPI();