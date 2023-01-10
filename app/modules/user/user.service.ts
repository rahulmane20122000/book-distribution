import { authConstants } from "../auth/auth.constants";
import { schoolConstants } from "../school/school.constants";
import { schoolSchema, SchoolSchema } from "../school/school.schema";
import { userConstants } from "./user.constants";
import { UserSchema, userSchema } from "./user.schema";

const getAssignedSchools = (id: string) => {
  const distributorIndex = userSchema.getIndexById(id);
  const schools = [];
  for (let id of UserSchema.userData[distributorIndex].assignedSchools || "") {
    const schoolDetails = SchoolSchema.schoolData.find((data) => data.schoolId === id);
    schools.push({
      schoolDetails: schoolDetails?.schoolName,
      schoolId: schoolDetails?.schoolId,
    });

  }
  console.log(schools.length);
  if (schools.length === 0) {
    throw schoolConstants.NOT_FOUND;
  }
  return schools;
};

const getAllDistributors = () => {
  const data = userSchema.getAll();
  if(data.length === 0){
    throw userConstants.NO_DISTRIBUTOR
  }

  return data
};

const getPendingAccounts = () => {
  const pendingAccounts = userSchema.getAll().filter((data) => data.accountStatus === "pending");
  if (pendingAccounts.length !== 0) {
    return pendingAccounts;
  }
  throw userConstants.NO_PENDING_ACCOUNT
}

const assignSchools = (schoolIds: string[], distributorId: string) => {
  const distributorIndex = userSchema.getIndexById(distributorId);
  if (UserSchema.userData[distributorIndex].accountStatus) {
    if (distributorIndex !== -1) {
      schoolSchema.assign(distributorIndex, schoolIds);
      return `Schools assigned to ${UserSchema.userData[distributorIndex].username}`;
    }
    throw authConstants.DISTRIBUTOR_NOT_FOUND;
  }
  throw schoolConstants.ACCOUNT_NOT_APPROVED;
}


export default { getAssignedSchools, getAllDistributors, getPendingAccounts, assignSchools };
