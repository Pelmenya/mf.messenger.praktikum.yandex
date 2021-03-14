import { chat } from "../../template-parts/chat.tmpl.js";
import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";

export default class ChatPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return _.template(chat.tmpl)(this.props);
  }
}