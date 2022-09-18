"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('Bonjour');
//# sourceMappingURL=index.js.map