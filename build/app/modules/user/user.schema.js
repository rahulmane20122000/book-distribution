"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.UserSchema = void 0;
const uuid_1 = require("uuid");
const password_1 = require("../../utilities/password");
const roles_constants_1 = require("../roles/roles.constants");
class UserSchema {
    getAllDistributors() {
        return UserSchema.userData.filter((data) => data.role === roles_constants_1.ROLES.DISTRIBUTOR);
    }
    createDistributor(userDetails) {
        const { username, password, email } = userDetails;
        UserSchema.userData.push({
            id: (0, uuid_1.v4)(),
            username: username,
            email: email,
            password: (0, password_1.createHash)(password),
            role: "a1fb54a0-659c-423d-81d5-1cda568459db",
            assignedSchools: [],
            accountStatus: false,
        });
        return true;
    }
    getByEmail(email) {
        return UserSchema.userData.find((details) => details.email === email);
    }
    getIndexById(id) {
        return UserSchema.userData.findIndex((details) => details.id === id);
    }
}
exports.UserSchema = UserSchema;
UserSchema.userData = [
    {
        id: "1000",
        username: "admin",
        email: "admin@coditas.com",
        password: (0, password_1.createHash)("admin"),
        role: "0a85908d-6574-441f-8a88-a7d7ef4aa947",
    },
    {
        id: "1001",
        username: "rahul",
        email: "rahul.mane@coditas.com",
        password: (0, password_1.createHash)("rahul"),
        role: "a1fb54a0-659c-423d-81d5-1cda568459db",
        assignedSchools: ["12345678"],
        accountStatus: true,
    },
];
exports.userSchema = new UserSchema();
//# sourceMappingURL=user.schema.js.map