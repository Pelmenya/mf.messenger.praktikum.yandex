import Block from "../../utils/classes/Block.js";
import BlockProps from "../../types/BlockProps.js";
import { popupAvatar } from "../../template-parts/popup-avatar.tmpl.js";

interface PopupAvatarPageProps extends BlockProps {
  error_title: string;
  title: string;
  load: string;
  label: string;
  error: string;
}

export default class PopupAvatarPage extends Block<PopupAvatarPageProps> {
  constructor(props: PopupAvatarPageProps) {
    super(props);
  }

  render() {
    return _.template(popupAvatar.tmpl)(this.props);
  }
}
