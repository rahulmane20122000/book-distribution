import { MessageHandler } from "../../utilities/response-handler";

export const schoolConstants = {
    NOT_FOUND : new MessageHandler(404,"School Not Found"),
    FAILED: new MessageHandler(400,"Bad Request"),
    INVALID_CREDENTIALS : new MessageHandler(401,"Unauthorised!!!"),
    UPDATED:new MessageHandler(200,"School Data Updated!!!"),
    ADDED:new MessageHandler(200,"School Added Sucessfully!!!"),
    ACCOUNT_NOT_APPROVED : new MessageHandler(401,"Account Is Not Yet Approved!!!"),
    DELETED:new MessageHandler(200,"School Deleted Sucessfully!!"),
    INVALID_SCHOOL:new MessageHandler(404,"Invalid School Id")
};