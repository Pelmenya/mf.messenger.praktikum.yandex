import { myAccount } from "../../template-parts/my-account/my-account.tmpl";
import BlockProps from "../../types/BlockProps";
import Block from "../../utils/classes/Block";
import { router } from "../../utils/classes/Router";
import setUserFields from "../../utils/functions/setUserFields";
import _ from "lodash";

export default class MyAccountDataPage extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
    this.create();
  }

  public create(){
    this.addListeners();
  }

  public addListeners() {
    if (this.element !== null) {
      const controlBackBtn = this.element.querySelector(".control__back-btn");
      if (controlBackBtn !== null)
        controlBackBtn.addEventListener("click", () => {
          setUserFields();
          router.back();
        });
    }
  }

  render() {
    return _.template(myAccount.tmpl)();
  }
}
