import isEqualStrings from "../functions/isEqualStrings.js";
import render from "../functions/render.js";

interface RouteProps {
  rootQuery: string;
  blockProps: any;
}

export default class Route {
  private props: RouteProps;
  private pathname: string;
  private blockClass: any;
  private block: any;

  constructor(pathname: string, view: Function, props: RouteProps) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide(true);
    }
  }

  match(pathname: string) {
    return isEqualStrings(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass(this.props.blockProps);
    }
    if (this.props.blockProps.elements !== undefined)
      render([
        { query: this.props.rootQuery, block: this.block },
        ...this.props.blockProps.elements,
      ]);
    else
      render([
        { query: this.props.rootQuery, block: this.block },
      ]);
    //if (this.props.blockProps.visible === undefined || this.props.blockProps.visible === true)
      if (this.block !== null) this.block.show();
  }
}