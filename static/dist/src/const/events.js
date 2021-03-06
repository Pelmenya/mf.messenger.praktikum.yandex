"use strict";
const EVENTS = (() => {
    const INIT = "init";
    const FLOW_CDM = "flow:component-did-mount";
    const FLOW_CDU = "flow:component-did-update";
    const FLOW_RENDER = "flow:render";
    return { INIT, FLOW_CDM, FLOW_CDU, FLOW_RENDER };
})();
//# sourceMappingURL=events.js.map