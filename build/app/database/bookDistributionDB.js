"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolData = exports.userData = void 0;
exports.userData = [
    {
        id: "123456",
        username: "Rahul",
        email: "rahulmane@coditas.com",
        password: "1234",
        role: "salesman",
        assignedSchools: ["12345678", "12345679", "12345670"],
        accountStatus: 0,
    },
    {
        id: "1000",
        username: "admin",
        email: "admin@coditas.com",
        password: "admin",
        role: "admin",
        assignedSchools: [],
        accountStatus: 1,
    },
];
exports.schoolData = [
    {
        schoolId: "12345678",
        schoolName: "Pune Public School",
        classes: {
            "1st": {
                subjects: { maths: 1, science: 0, english: 1 },
                status: "partial",
            },
            "2nd": {
                subjects: { maths: 1, science: 0, english: 1 },
                status: "partial",
            },
            "3rd": {
                subjects: { maths: 1, science: 0, english: 1 },
                status: "partial",
            },
        },
    },
    {
        schoolId: "12345679",
        schoolName: "Delhi Public School",
        classes: {
            "1st": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
            "2nd": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
            "3rd": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
        },
    },
    {
        schoolId: "12345670",
        schoolName: "Mumbai Public School",
        classes: {
            "1st": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
            "2nd": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
            "3rd": {
                subjects: { maths: 1, science: "", english: 1 },
                status: "partial",
            },
        },
    },
];
//# sourceMappingURL=bookDistributionDB.js.map