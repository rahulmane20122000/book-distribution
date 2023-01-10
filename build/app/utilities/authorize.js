"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = exports.authorize = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_constants_1 = require("../modules/auth/auth.constants");
const authorize = (excludedPaths) => {
    return (req, res, next) => {
        try {
            if (excludedPaths.find((excludedPathsData) => excludedPathsData.path === req.url && excludedPathsData.method === req.method))
                return next();
            const token = req.headers.authorization || '';
            const payload = (0, jsonwebtoken_1.verify)(token, process.env.JWT_TOKEN || '');
            res.locals = payload;
            console.log(payload);
            next();
        }
        catch (error) {
            next(auth_constants_1.authConstants.INVALID_CREDENTIALS);
        }
    };
};
exports.authorize = authorize;
const permit = (permittedRoles) => {
    return (req, res, next) => {
        console.log(res.locals);
        if (permittedRoles.includes(res.locals.role)) {
            return next();
        }
        next(auth_constants_1.authConstants.INVALID_CREDENTIALS);
    };
};
exports.permit = permit;
//# sourceMappingURL=authorize.js.map