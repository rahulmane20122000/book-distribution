import { MessageHandler } from "../../utilities/response-handler";

export const authConstants = {
    INVALID_CREDENTIALS : new MessageHandler(401,"Unauthorised!!!"),
    DISTRIBUTOR_CREATED:new MessageHandler(200,"Distributor Created!,Wait For Admin Approval"),
    DISTRIBUTOR_EXISTS: new MessageHandler(409,"Distributor Already Exist"),
    EMAIL_SENT : new MessageHandler(200,"Account Approved!!!"),
    ACC_APPROVED : new MessageHandler(200,"Account Approved!!!"),
    DISTRIBUTOR_NOT_FOUND : new MessageHandler(401,"Distributor Not Found"),
    ACC_REJCTED : new MessageHandler(200,"Account Rejcted!!!"),
    ACC_DEACTIVATE : new MessageHandler(200,"Account Deactivated!!!"),
    FAILED: new MessageHandler(400,"Bad Request"),
}