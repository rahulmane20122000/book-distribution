"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_constants_1 = require("./roles.constants");
const roles_type_1 = require("./roles.type");
class RoleSchema {
    getById(id) {
        return RoleSchema.roleDb.find(r => r.id === id);
    }
}
RoleSchema.roleDb = [
    new roles_type_1.Role(roles_constants_1.ROLES.ADMIN, "ADMIN"),
    new roles_type_1.Role(roles_constants_1.ROLES.DISTRIBUTOR, "DISTRIBUTOR"),
];
const roleSchema = new RoleSchema();
exports.default = roleSchema;
//# sourceMappingURL=roles.schema.js.map