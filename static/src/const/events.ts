const EVENTS = (() => {
  const INIT: string = "init";
  const FLOW_CDM: string = "flow:component-did-mount";
  const FLOW_CDU: string = "flow:component-did-update";
  const FLOW_RENDER: string = "flow:render";

  return { INIT, FLOW_CDM, FLOW_CDU, FLOW_RENDER };
})();
