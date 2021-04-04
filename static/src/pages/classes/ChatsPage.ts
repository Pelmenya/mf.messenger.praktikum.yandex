import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { chats } from "../../template-parts/chats.tmpl.js";

export default class ChatsPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return _.template(chats.tmpl)(this.props);
  }
}

