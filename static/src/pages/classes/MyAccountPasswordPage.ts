import { myAccountPassword } from "../../template-parts/my-account-password.tmpl.js";
import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";


export default class MyAccountPasswordPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return _.template(myAccountPassword.tmpl)(this.props);
  }
}