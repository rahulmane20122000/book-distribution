import { v4 } from "uuid";
import { createHash } from "../../utilities/password";
import { ROLES } from "../roles/roles.constants";
import { IUser } from "./user.types";

export class UserSchema {
  public static userData: IUser[] = [
    {
      id: "1000",
      username: "admin",
      email: "admin@coditas.com",
      password: createHash("admin"),
      role: "0a85908d-6574-441f-8a88-a7d7ef4aa947",
      accountStatus:"approved"
    },
    {
      id: "1001",
      username: "rahul",
      email: "rahul.mane@coditas.com",
      password: createHash("rahul"),
      role: "a1fb54a0-659c-423d-81d5-1cda568459db",
      assignedSchools: ["12345678"],
      accountStatus: "approved",
    },
  ];

  getAll() {
    return UserSchema.userData.filter(
      (data) => data.role === ROLES.DISTRIBUTOR
    );
  }

  create(userDetails: IUser) {
    const { username, password, email } = userDetails;
    UserSchema.userData.push({
      id: v4(),
      username: username,
      email: email,
      password: createHash(password),
      role: "a1fb54a0-659c-423d-81d5-1cda568459db",
      assignedSchools: [],
      accountStatus: "pending",
    });
    return true;
  }

  getByEmail(email: string) {
    return UserSchema.userData.find(
      (details) => details.email === email
    );
  }

  getIndexById(id: string) {
    return UserSchema.userData.findIndex((details) => details.id === id);
  }
}

export const userSchema = new UserSchema();
