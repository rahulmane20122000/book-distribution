"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolConstants = void 0;
const response_handler_1 = require("../../utilities/response-handler");
exports.schoolConstants = {
    NOT_FOUND: new response_handler_1.MessageHandler(404, "School Not Found"),
    FAILED: new response_handler_1.MessageHandler(400, "Bad Request"),
    INVALID_CREDENTIALS: new response_handler_1.MessageHandler(401, "Unauthorised!!!"),
    UPDATED: new response_handler_1.MessageHandler(200, "School Data Updated!!!"),
    ADDED: new response_handler_1.MessageHandler(200, "School Added Sucessfully!!!"),
    ACCOUNT_NOT_APPROVED: new response_handler_1.MessageHandler(401, "Account Is Not Yet Approved!!!"),
};
//# sourceMappingURL=school.constants.js.map