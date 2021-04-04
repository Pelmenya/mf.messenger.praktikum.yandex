import Block from "../../src/utils/classes/Block.js";
import BlockProps from "../../src/types/BlockProps.js";
import { popup } from "./popup.tmpl.js";

interface PopupProps extends BlockProps {
  title: string;
  name: string;
  field: string;
  placeholder: string;
}

export default class Popup extends Block<PopupProps> {
  constructor(props: PopupProps) {
    super(props);
  }

  render() {
    return _.template(popup.tmpl)(this.props);
  }
}
