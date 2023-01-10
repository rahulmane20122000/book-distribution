"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolSchema = exports.SchoolSchema = void 0;
const uuid_1 = require("uuid");
const user_schema_1 = require("../user/user.schema");
class SchoolSchema {
    getSchoolIndex(id) {
        return SchoolSchema.schoolData.findIndex((data) => data.schoolId === id);
    }
    addSchool(schoolDetails) {
        const { schoolName, totalClasses, subjects } = schoolDetails;
        let subjectStatus = {};
        let classes = {};
        subjects.forEach((subject) => {
            subjectStatus[subject] = "";
        });
        for (let standard = 1; standard <= totalClasses; standard++) {
            classes[standard] = { subjects: Object.assign({}, subjectStatus), status: "None" };
        }
        SchoolSchema.schoolData.push({
            schoolId: (0, uuid_1.v4)(),
            schoolName: schoolName,
            classes: classes,
        });
    }
    getAllSchools() {
        return SchoolSchema.schoolData;
    }
    updateSchool(updateSchoolData) {
        const schoolIndex = this.getSchoolIndex(updateSchoolData.schoolId);
        SchoolSchema.schoolData[schoolIndex].classes = updateSchoolData.classes;
        for (let classes in SchoolSchema.schoolData[schoolIndex].classes) {
            let status = Object.values(SchoolSchema.schoolData[schoolIndex].classes[classes].subjects);
            let str = status.join("");
            status.length == str.length ? SchoolSchema.schoolData[schoolIndex].classes[classes].status = "Full" : str.length ? SchoolSchema.schoolData[schoolIndex].classes[classes].status = "Partial" : SchoolSchema.schoolData[schoolIndex].classes[classes].status = "None";
        }
        return true;
    }
    assign(distributorIndex, schoolIds) {
        const assignedSchools = user_schema_1.UserSchema.userData[distributorIndex].assignedSchools;
        schoolIds.forEach((id) => assignedSchools.push(id));
    }
    getById(schoolIndex) {
        return SchoolSchema.schoolData[schoolIndex];
    }
}
exports.SchoolSchema = SchoolSchema;
SchoolSchema.schoolData = [
    {
        schoolId: "12345678",
        schoolName: "Pune Public School",
        classes: {
            "1": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
            "2": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
            "3": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
        },
    },
];
exports.schoolSchema = new SchoolSchema();
//# sourceMappingURL=school.schema.js.map