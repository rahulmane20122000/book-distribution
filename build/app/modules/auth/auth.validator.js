"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utilities/validate");
exports.SignupValidator = [
    (0, express_validator_1.body)("username").isString().notEmpty().withMessage("username is required"),
    (0, express_validator_1.body)("password").isString().notEmpty().withMessage("password is invalid"),
    (0, express_validator_1.body)("email").isEmail().withMessage("required email"),
    validate_1.validate,
];
//# sourceMappingURL=auth.validator.js.map