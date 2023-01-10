import jwt from 'jsonwebtoken';
import { IUser } from "../user/user.types";
import { userSchema, UserSchema } from "../user/user.schema";
import { authConstants } from "./auth.constants";
import { comparePassword } from '../../utilities/password';
import roleSchema from '../roles/roles.schema';
import { sendEmail } from '../../utilities/email';
import { userConstants } from '../user/user.constants';



const createDistributor = (userDetails: IUser) => {
  const distributor = userSchema.getByEmail(userDetails.email);
  const isCreated = userSchema.create(userDetails);
  if (distributor) throw authConstants.DISTRIBUTOR_EXISTS;
  return isCreated;
};

const login = (userDetails: any) => {
  const { email, password } = userDetails;
  const user = UserSchema.userData.find((details) => details.email === email && comparePassword(details.password, password));
  const role = roleSchema.getById(user?.role || "");
  if (user && user.accountStatus === "approved") {
    if(user.role == "a1fb54a0-659c-423d-81d5-1cda568459db"&&!user.assignedSchools?.length) throw userConstants.NO_SCHOOLS
    const token = jwt.sign(user, process.env.JWT_TOKEN as string);
    return { token: token, role: role?.name }
  }

  throw authConstants.INVALID_CREDENTIALS;
}

const approveAccount = (id: string) => {
  const distributorIndex = userSchema.getIndexById(id);
  if (distributorIndex === -1) throw authConstants.DISTRIBUTOR_NOT_FOUND
  UserSchema.userData[distributorIndex].accountStatus = "approved";
  sendEmail(UserSchema.userData[distributorIndex].email, "Account Approved", "Your Account Was Approved!!!");
  return authConstants.ACC_APPROVED
}


const rejectAccount = (id: string) => {
  const distributorIndex = userSchema.getIndexById(id);
  if (distributorIndex !== -1) {
    UserSchema.userData[distributorIndex].accountStatus = "rejected";
    return authConstants.ACC_REJCTED;
  }
  throw authConstants.FAILED;
}

const deactivateAccount = (id: string) => {
  const distributorIndex = userSchema.getIndexById(id);
  if (distributorIndex !== -1) {
    UserSchema.userData[distributorIndex].accountStatus = "deactivate";
    return authConstants.ACC_DEACTIVATE;
  }
  throw authConstants.FAILED;
}



export default { createDistributor, login, approveAccount, rejectAccount, deactivateAccount };
