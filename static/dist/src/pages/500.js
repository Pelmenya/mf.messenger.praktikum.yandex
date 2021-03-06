"use strict";
(() => {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(err.tmpl)({
        title: "500",
        message: "Мы уже фиксим",
        back: "index.html",
        next: "404.html",
    }));
})();
//# sourceMappingURL=500.js.map