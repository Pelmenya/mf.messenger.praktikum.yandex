import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { talkerTextMessage } from "./talkerTextMessage.tmpl.js";

interface TalkerTextMessageProps extends BlockProps {
  message: string;
  time: string;
}

export default class TalkerTextMessage extends Block<TalkerTextMessageProps> {
  constructor(props: TalkerTextMessageProps) {
    super(props);
  }

  render() {
    return _.template(talkerTextMessage.tmpl)(this.props);
  }
}
