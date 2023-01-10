"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const routes_types_1 = require("./routes.types");
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
const school_routes_1 = __importDefault(require("../school/school.routes"));
const user_routes_1 = __importDefault(require("../user/user.routes"));
exports.routes = [
    new routes_types_1.Route("/auth", auth_routes_1.default),
    new routes_types_1.Route("/school", school_routes_1.default),
    new routes_types_1.Route("/user", user_routes_1.default)
];
exports.excludedPaths = [
    { path: "/auth/login", method: "POST" },
    { path: "/auth/sign-up", method: "POST" },
];
//# sourceMappingURL=routes.data.js.map