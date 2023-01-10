"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_constants_1 = require("./school.constants");
const school_schema_1 = require("./school.schema");
const user_schema_1 = require("../user/user.schema");
const auth_constants_1 = require("../auth/auth.constants");
const user_constants_1 = require("../user/user.constants");
const getSchoolDataById = (schoolId) => {
    const schoolIndex = school_schema_1.schoolSchema.getSchoolIndex(schoolId);
    if (schoolIndex !== -1) {
        const data = school_schema_1.schoolSchema.getById(schoolIndex);
        return data;
    }
    throw school_constants_1.schoolConstants.NOT_FOUND;
};
const updateSchoolData = (updatedSchoolData, id) => {
    const userIndex = user_schema_1.userSchema.getIndexById(id);
    const assignedSchools = user_schema_1.UserSchema.userData[userIndex].assignedSchools || '';
    if (assignedSchools.includes(updatedSchoolData.schoolId)) {
        school_schema_1.schoolSchema.updateSchool(updatedSchoolData);
        return school_constants_1.schoolConstants.UPDATED;
    }
    throw auth_constants_1.authConstants.INVALID_CREDENTIALS;
};
const addSchool = (schoolDetails) => {
    school_schema_1.schoolSchema.addSchool(schoolDetails);
};
const getAllSchools = () => {
    const data = school_schema_1.schoolSchema.getAllSchools();
    if (data.length !== 0) {
        return data;
    }
    throw user_constants_1.userConstants.NO_SCHOOLS;
};
const assignSchools = (schoolIds, distributorId) => {
    const distributorIndex = user_schema_1.userSchema.getIndexById(distributorId);
    if (user_schema_1.UserSchema.userData[distributorIndex].accountStatus) {
        if (distributorIndex !== -1) {
            school_schema_1.schoolSchema.assign(distributorIndex, schoolIds);
            return `Schools assigned to ${user_schema_1.UserSchema.userData[distributorIndex].username}`;
        }
        throw auth_constants_1.authConstants.DISTRIBUTOR_NOT_FOUND;
    }
    throw school_constants_1.schoolConstants.ACCOUNT_NOT_APPROVED;
};
exports.default = { getSchoolDataById, updateSchoolData, addSchool, getAllSchools, assignSchools };
//# sourceMappingURL=school.service.js.map