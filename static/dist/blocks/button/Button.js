"use strict";
const ButtonClass = (() => {
    const { Block } = BlockClass;
    class Button extends Block {
        constructor(props) {
            super("div", props);
        }
        render() {
            return _.template(button.tmpl)(this.props);
        }
    }
    return { Button };
})();
//# sourceMappingURL=Button.js.map