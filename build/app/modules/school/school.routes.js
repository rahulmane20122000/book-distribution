"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorize_1 = require("../../utilities/authorize");
const response_handler_1 = require("../../utilities/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const school_service_1 = __importDefault(require("./school.service"));
const school_validators_1 = require("./school.validators");
const router = (0, express_1.Router)();
const { getSchoolDataById, updateSchoolData, addSchool, getAllSchools, assignSchools, } = school_service_1.default;
router.put("/", (req, res, next) => {
    try {
        const { id } = res.locals;
        const response = updateSchoolData(req.body, id);
        res.status(200).send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
});
router.put("/:id", (req, res, next) => {
    try {
        const response = assignSchools(req.body.schoolIds, req.params.id);
        res.status(200).send(new response_handler_1.ResponseHandler({ message: response, statusCode: 200 }));
    }
    catch (error) {
        next(error);
    }
});
router.post("/add", school_validators_1.schoolValidator, (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => {
    addSchool(req.body);
    res.status(200).send(new response_handler_1.ResponseHandler("School Added Successfully!!"));
});
router.get("/all", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const result = getAllSchools();
        res.status(200).send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
});
router.get("/:schoolId", (req, res, next) => {
    try {
        const response = getSchoolDataById(req.params.schoolId);
        res.status(200).send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=school.routes.js.map