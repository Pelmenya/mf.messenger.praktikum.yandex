"use strict";
(() => {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(chat.tmpl)());
})();
//# sourceMappingURL=chat.js.map