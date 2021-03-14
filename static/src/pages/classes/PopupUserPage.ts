import Block from "../../utils/classes/Block.js";
import BlockProps from "../../types/BlockProps.js";
import { popupUser } from "../../template-parts/popup-user.tmpl.js";

interface PopupUserPageProps extends BlockProps {
  title: string;
}

export default class PopupUserPage extends Block<PopupUserPageProps> {
  constructor(props: PopupUserPageProps) {
    super(props);
  }

  render() {
    return _.template(popupUser.tmpl)(this.props);
  }
}
