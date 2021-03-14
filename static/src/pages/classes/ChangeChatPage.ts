import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { changeChat } from "../../template-parts/change-chat.tmpl.js";

export default class ChangeChatPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return _.template(changeChat.tmpl)(this.props);
  }
}