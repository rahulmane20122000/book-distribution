"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_schema_1 = require("../school/school.schema");
const user_constants_1 = require("./user.constants");
const user_schema_1 = require("./user.schema");
const getAssignedSchools = (id) => {
    const distributorIndex = user_schema_1.userSchema.getIndexById(id);
    const schools = [];
    for (let id of user_schema_1.UserSchema.userData[distributorIndex].assignedSchools || "") {
        const schoolDetails = school_schema_1.SchoolSchema.schoolData.find((data) => data.schoolId === id);
        schools.push(schoolDetails === null || schoolDetails === void 0 ? void 0 : schoolDetails.schoolName);
    }
    console.log(schools.length);
    if (schools.length === 0) {
        throw user_constants_1.userConstants.NO_SCHOOLS;
    }
    return schools;
};
const getAllDistributors = () => {
    const data = user_schema_1.userSchema.getAllDistributors();
    return data;
};
const getPendingAccounts = () => {
    const pendingAccounts = user_schema_1.userSchema.getAllDistributors().filter((data) => data.accountStatus === false);
    if (pendingAccounts.length !== 0) {
        return pendingAccounts;
    }
    throw user_constants_1.userConstants.NO_PENDING_ACCOUNT;
};
exports.default = { getAssignedSchools, getAllDistributors, getPendingAccounts };
//# sourceMappingURL=user.service.js.map