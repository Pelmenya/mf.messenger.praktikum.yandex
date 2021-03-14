import { myAccount } from "../../template-parts/my-account.tmpl.js";
import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";

interface MyAccountPageProps extends BlockProps {
  disabled: string;
  menu: string;
  phone: string;
  email: string;
}

export default class MyAccountPage extends Block<MyAccountPageProps> {
  constructor(props: MyAccountPageProps) {
    super(props);
  }

  render() {
    return _.template(myAccount.tmpl)(this.props);
  }
}
