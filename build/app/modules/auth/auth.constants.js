"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConstants = void 0;
const response_handler_1 = require("../../utilities/response-handler");
exports.authConstants = {
    INVALID_CREDENTIALS: new response_handler_1.MessageHandler(401, "Unauthorised!!!"),
    DISTRIBUTOR_CREATED: new response_handler_1.MessageHandler(200, "Distributor Created!,Wait For Admin Approval"),
    DISTRIBUTOR_EXISTS: new response_handler_1.MessageHandler(409, "Distributor Already Exist"),
    EMAIL_SENT: new response_handler_1.MessageHandler(200, "Account Approved!!!"),
    ACC_APPROVED: new response_handler_1.MessageHandler(200, "Account Approved!!!"),
    DISTRIBUTOR_NOT_FOUND: new response_handler_1.MessageHandler(401, "Distributor Not Found"),
    ACC_REJCTED: new response_handler_1.MessageHandler(200, "Account Rejcted!!!"),
    FAILED: new response_handler_1.MessageHandler(400, "Bad Request"),
};
//# sourceMappingURL=auth.constants.js.map