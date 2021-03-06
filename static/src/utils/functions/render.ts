const renderFunction = (() => {
  function render(query: string, block: any) {
    const root: Nullable<HTMLElement> = document.querySelector(query);
    if (root !== null) root.appendChild(block.getContent());
    return root;
  }
  return { render };
})();
