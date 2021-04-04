import Block from "../../src/utils/classes/Block.js";
import BlockProps from "../../src/types/BlockProps.js";
import { card } from "./card.tmpl.js";
import { Nullable } from "../../src/types/Nullable.js";

interface CardProps extends BlockProps {
  title: string;
  name: string;
  last_message: Nullable<string>;
  unread_count: number;
  id: number;
}

export default class Card extends Block<CardProps> {
  constructor(props: CardProps) {
    super(props);
    this.addEventListeners()
  }

  addEventListeners = () => {
    if (this.element !== null) {
      this.element.addEventListener("focus", ()=>{
        console.log(this.element)
      });
    }
  }

  render() {
    return _.template(card.tmpl)(this.props);
  }
}
