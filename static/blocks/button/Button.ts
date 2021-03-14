
import Props from "../../src/types/Props.js";
import Block from "../../src/utils/classes/Block.js";
import { button } from "./button.tmpl.js";


export default class Button extends Block {
  constructor(props: Props) {
    super("div", props);
  }
  render() {
    return _.template(button.tmpl)(this.props);
  }
}
