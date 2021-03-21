import BlockProps from "../../types/BlockProps.js";
import { Nullable } from "../../types/Nullable.js";
import isEqual from "../functions/isEqualStrings.js";
import render from "../functions/render.js";
import Block from "./Block.js";

interface RouteProps {
  rootQuery: string;
  blockProps: any;
}


export default class Route {
  private props: RouteProps;
  private pathname: string;
  private blockClass: any;
  private block : Nullable<Block<BlockProps>>;

  constructor(pathname: string, view: any , props: RouteProps) {
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
      this.block.hide("yes");
    }
  }

  match(pathname:string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    console.log(this.block)
    if (!this.block) {
      this.block = new this.blockClass(this.props.blockProps);
    }
    render([
      { query: this.props.rootQuery, block: this.block },
      ...this.props.blockProps.elements,
    ]);
    if (this.block !== null) this.block.show();
  }
}
