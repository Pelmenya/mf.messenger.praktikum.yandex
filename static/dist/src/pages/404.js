"use strict";
(() => {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(err.tmpl)({
        title: "404",
        message: "Не туда попали",
        back: "index.html",
        next: "change-chat.html",
    }));
})();
//# sourceMappingURL=404.js.map