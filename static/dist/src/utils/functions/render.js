"use strict";
const renderFunction = (() => {
    function render(query, block) {
        const root = document.querySelector(query);
        if (root !== null)
            root.appendChild(block.getContent());
        return root;
    }
    return { render };
})();
//# sourceMappingURL=render.js.map