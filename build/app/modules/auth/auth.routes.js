"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorize_1 = require("../../utilities/authorize");
const response_handler_1 = require("../../utilities/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const auth_constants_1 = require("./auth.constants");
const auth_service_1 = __importDefault(require("./auth.service"));
const auth_validator_1 = require("./auth.validator");
const router = (0, express_1.Router)();
const { createDistributor, login, approveAccount, rejectAccount } = auth_service_1.default;
router.post("/sign-up", auth_validator_1.SignupValidator, (req, res, next) => {
    try {
        createDistributor(req.body);
        res.send(new response_handler_1.ResponseHandler(auth_constants_1.authConstants.DISTRIBUTOR_CREATED));
    }
    catch (error) {
        next(error);
    }
});
router.post("/login", (req, res, next) => {
    try {
        const response = login(req.body);
        res.status(200).send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
});
router.delete("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const response = rejectAccount(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const { id } = req.params;
        const response = approveAccount(id);
        res.status(200).send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map