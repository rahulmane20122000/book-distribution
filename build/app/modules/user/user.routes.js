"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorize_1 = require("../../utilities/authorize");
const response_handler_1 = require("../../utilities/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const user_service_1 = __importDefault(require("./user.service"));
const router = (0, express_1.Router)();
const { getAssignedSchools, getAllDistributors, getPendingAccounts } = user_service_1.default;
router.get("/", (req, res, next) => {
    try {
        const { id } = res.locals;
        const data = getAssignedSchools(id);
        res.status(200).send(new response_handler_1.ResponseHandler(data));
    }
    catch (error) {
        next(error);
    }
});
router.get("/allDistributors", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res) => {
    const data = getAllDistributors();
    res.status(200).send(new response_handler_1.ResponseHandler(data));
});
router.get("/pendingAccounts", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const response = getPendingAccounts();
        res.status(200).send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map