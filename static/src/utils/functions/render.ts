import Block from "../classes/Block.js";

type RendersBlocks = Array<{ query: string; block: Block<any> }>;

export default function render(renderBloks: RendersBlocks) {
  renderBloks.forEach((element) => {
    const root = document.querySelector(element.query);
    if (root) root.appendChild(element.block.getContent() as HTMLElement);
  });
}
