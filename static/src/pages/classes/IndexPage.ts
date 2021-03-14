import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { formSignIn } from "../../template-parts/form-sign-in.tmpl.js";

export default class IndexPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return _.template(formSignIn.tmpl)(this.props);
  }
}