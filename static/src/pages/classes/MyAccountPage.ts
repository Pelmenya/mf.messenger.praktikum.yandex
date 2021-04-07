import { ROUTES } from "../../const/routes.js";
import { myAccount } from "../../template-parts/my-account.tmpl.js";
import BlockProps from "../../types/BlockProps.js";
import Block from "../../utils/classes/Block.js";
import { router } from "../../utils/classes/Router.js";
import renderChats from "../../utils/functions/renderChats.js";

interface MyAccountPageProps extends BlockProps {
  disabled: string;
  menu: string;
  phone: string;
  email: string;
}

export default class MyAccountPage extends Block<MyAccountPageProps> {
  constructor(props: MyAccountPageProps) {
    super(props);
    this.create();
  }

  create() {
    this.element.querySelector(".control__back-btn").addEventListener("click", () => {
      renderChats();
    });
  }
  render() {
    return _.template(myAccount.tmpl)(this.props);
  }
}
