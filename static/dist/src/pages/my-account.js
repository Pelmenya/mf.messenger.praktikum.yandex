"use strict";
(() => {
    const { PATTERN_EMAIL, PATTERN_PHONE } = PATTERNS;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", _.template(myAccount.tmpl)({
        disabled: "disabled",
        menu: "menu_is-opened",
        phone: PATTERN_PHONE,
        email: PATTERN_EMAIL,
    }));
})();
//# sourceMappingURL=my-account.js.map