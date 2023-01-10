"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
const bookDistributionDB_1 = require("../../database/bookDistributionDB");
class AuthSchema {
    getIndexByEmail(email) {
        return bookDistributionDB_1.userData.findIndex((details) => details.email === email);
    }
    login(userDetails) {
        const { email, password } = userDetails;
        const userIndex = bookDistributionDB_1.userData.findIndex((details) => details.email === email && details.password === password);
        return userIndex;
    }
    getIndexById(id) {
        return bookDistributionDB_1.userData.findIndex((details) => details.id === id);
    }
}
exports.authSchema = new AuthSchema();
//# sourceMappingURL=auth.schema.js.map