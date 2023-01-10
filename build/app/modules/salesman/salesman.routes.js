"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorize_1 = require("../../utilities/authorize");
const response_handler_1 = require("../../utilities/response-handler");
const salesman_service_1 = __importDefault(require("./salesman.service"));
const router = (0, express_1.Router)();
const { getAssignedSchools, getSchoolDataById, updateSchoolData } = salesman_service_1.default;
router.get("/", authorize_1.authorize, (req, res, next) => {
    console.log("inside get schools");
    const { id } = res.locals;
    const data = getAssignedSchools(id);
    res.status(200).send(new response_handler_1.ResponseHandler(data));
});
router.get("/:schoolId", authorize_1.authorize, (req, res, next) => {
    const { schoolId } = req.params;
    const data = getSchoolDataById(schoolId);
    res.status(200).send(new response_handler_1.ResponseHandler(data));
});
router.put("/", authorize_1.authorize, (req, res, next) => {
});
exports.default = router;
//# sourceMappingURL=salesman.routes.js.map