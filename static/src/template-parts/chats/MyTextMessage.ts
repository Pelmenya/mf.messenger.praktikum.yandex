import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { myTextMessage } from "./myTextMessage.tmpl.js";

interface MyTextMessageProps extends BlockProps{
  message: string;
  time: string;
}

export default class MyTextMessage extends Block<MyTextMessageProps> {
  constructor(props: MyTextMessageProps) {
    super(props);
  }

  render() {
    return _.template(myTextMessage.tmpl)(this.props);
  }
}