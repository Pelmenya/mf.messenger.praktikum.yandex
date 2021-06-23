import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { chatNotSelected } from "./chatNotSelected.tmpl.js";

interface ChatNotSelectedProps extends BlockProps{
  message: string;
}

export default class ChatNotSelected extends Block<ChatNotSelectedProps> {
  constructor(props: ChatNotSelectedProps) {
    super(props);
  }

  render() {
    return _.template(chatNotSelected.tmpl)(this.props);
  }
}