"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utilities/validate");
exports.schoolValidator = [
    (0, express_validator_1.body)("schoolName").isString().notEmpty().withMessage("schoolName is required"),
    (0, express_validator_1.body)("totalClasses").notEmpty().withMessage("totalClasses is required"),
    (0, express_validator_1.body)("subjects").isArray().withMessage("Atleast one subject require"),
    validate_1.validate,
];
//# sourceMappingURL=school.validators.js.map