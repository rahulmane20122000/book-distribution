"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_schema_1 = require("../user/user.schema");
const auth_constants_1 = require("./auth.constants");
const password_1 = require("../../utilities/password");
const roles_schema_1 = __importDefault(require("../roles/roles.schema"));
const email_1 = require("../../utilities/email");
const createDistributor = (userDetails) => {
    const distributor = user_schema_1.userSchema.getByEmail(userDetails.email);
    const isCreated = user_schema_1.userSchema.createDistributor(userDetails);
    if (distributor)
        throw auth_constants_1.authConstants.DISTRIBUTOR_EXISTS;
    return isCreated;
};
const login = (userDetails) => {
    const { email, password } = userDetails;
    const user = user_schema_1.UserSchema.userData.find((details) => details.email === email && (0, password_1.comparePassword)(details.password, password));
    const role = roles_schema_1.default.getById((user === null || user === void 0 ? void 0 : user.role) || "");
    if (user && user.accountStatus) {
        const token = jsonwebtoken_1.default.sign(user, process.env.JWT_TOKEN);
        return { token: token, role: role === null || role === void 0 ? void 0 : role.name };
    }
    throw auth_constants_1.authConstants.INVALID_CREDENTIALS;
};
const approveAccount = (id) => {
    const distributorIndex = user_schema_1.userSchema.getIndexById(id);
    if (distributorIndex === -1)
        throw auth_constants_1.authConstants.DISTRIBUTOR_NOT_FOUND;
    user_schema_1.UserSchema.userData[distributorIndex].accountStatus = true;
    (0, email_1.sendEmail)(user_schema_1.UserSchema.userData[distributorIndex].email, "Account Approved", "Your Account Was Approved!!!");
    return auth_constants_1.authConstants.ACC_APPROVED;
};
const rejectAccount = (id) => {
    const distributorIndex = user_schema_1.userSchema.getIndexById(id);
    if (distributorIndex !== -1) {
        user_schema_1.UserSchema.userData.splice(distributorIndex, 1);
        return auth_constants_1.authConstants.ACC_REJCTED;
    }
    throw auth_constants_1.authConstants.FAILED;
};
exports.default = { createDistributor, login, approveAccount, rejectAccount };
//# sourceMappingURL=auth.service.js.map