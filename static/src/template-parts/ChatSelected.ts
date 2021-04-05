import BlockProps from "../types/BlockProps.js";
import Block from "../utils/classes/Block.js";
import getElementFromStore from "../utils/functions/getElementFromStore.js";
import { store } from "../utils/store/storeObj.js";
import { chatSelected } from "./chatSelected.tmpl.js";

interface ChatSelectedProps extends BlockProps {
  title: string;
  name_chat?: string;
}

export default class ChatSelected extends Block<ChatSelectedProps> {
  constructor(props: ChatSelectedProps) {
    super(props);
    this.addEventListener();
  }

  addEventListener = () => {
    if (this.element !== null) {
      this.element.addEventListener("mousedown", () => {
        if (this.props.name_chat !== undefined)
          getElementFromStore(store, "chatsProps", this.props.name_chat).element.classList.add(
            "card__active"
          );
      });
    }
  };

  render() {
    return _.template(chatSelected.tmpl)(this.props);
  }
}
