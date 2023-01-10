"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesmanSchema = void 0;
const bookDistributionDB_1 = require("../../database/bookDistributionDB");
class SalesmanSchema {
    getIndex(id) {
        return bookDistributionDB_1.salesmanData.findIndex((value) => value.id === id);
    }
    getSchoolIndex(id) {
        return bookDistributionDB_1.schoolData.findIndex((data) => data.schoolId === id);
    }
}
exports.salesmanSchema = new SalesmanSchema();
//# sourceMappingURL=salesman.schema.js.map