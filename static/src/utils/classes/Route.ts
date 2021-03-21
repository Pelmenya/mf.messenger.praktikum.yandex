import isEqual from "../functions/isEqualStrings.js";
import render from "../functions/render.js";

interface RouteProps {
  rootQuery: string;
  blockProps: object;
}

export default class Route {
  private _props: RouteProps;
  constructor(pathname, view, props: RouteProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      console.log(this._props.blockProps);

      this._block = new this._blockClass(this._props.blockProps);

      render([
        { query: this._props.rootQuery, block: this._block },
        ...this._props.blockProps.elements,
      ]);
    }
      this._block.show();
  }
}
