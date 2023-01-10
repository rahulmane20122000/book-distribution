import { MessageHandler } from "../../utilities/response-handler";

export const userConstants = {
    NO_SCHOOLS: new MessageHandler(200,"No Schools Assigned"),
    NO_PENDING_ACCOUNT : new MessageHandler(200,"NO PENDING ACCOUNTS"),
    NO_DISTRIBUTOR: new MessageHandler(200,"No Distributor Present"),
}