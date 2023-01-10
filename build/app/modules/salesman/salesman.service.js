"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookDistributionDB_1 = require("../../database/bookDistributionDB");
const salesman_schema_1 = require("./salesman.schema");
const getAssignedSchools = (id) => {
    const salesmanIndex = salesman_schema_1.salesmanSchema.getIndex(id);
    return bookDistributionDB_1.salesmanData[salesmanIndex].assignedSchools;
};
const getSchoolDataById = (schoolId) => {
    const schoolIndex = salesman_schema_1.salesmanSchema.getSchoolIndex(schoolId);
    return bookDistributionDB_1.schoolData[schoolIndex];
};
const updateSchoolData = (id) => {
    const schoolIndex = salesman_schema_1.salesmanSchema.getSchoolIndex(id);
    bookDistributionDB_1.schoolData[schoolIndex].classes;
};
exports.default = { getAssignedSchools, getSchoolDataById, updateSchoolData };
//# sourceMappingURL=salesman.service.js.map