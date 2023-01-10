"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.createHash = void 0;
const bcryptjs_1 = require("bcryptjs");
const createHash = (password) => {
    const salt = (0, bcryptjs_1.genSaltSync)();
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, salt);
    return hashedPassword;
};
exports.createHash = createHash;
const comparePassword = (password, hashedPassword) => {
    return (0, bcryptjs_1.compareSync)(hashedPassword, password);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=password.js.map