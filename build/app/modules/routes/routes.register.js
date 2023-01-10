"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resgisterRoutes = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const authorize_1 = require("../../utilities/authorize");
const response_handler_1 = require("../../utilities/response-handler");
const routes_data_1 = require("./routes.data");
const resgisterRoutes = (app) => {
    app.use((0, express_1.json)());
    app.use((0, cors_1.default)());
    app.use((0, authorize_1.authorize)(routes_data_1.excludedPaths));
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.resgisterRoutes = resgisterRoutes;
//# sourceMappingURL=routes.register.js.map