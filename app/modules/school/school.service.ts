import { IschoolData } from "./school.types";
import { schoolConstants } from "./school.constants";
import { SchoolSchema, schoolSchema } from "./school.schema"
import { UserSchema, userSchema } from "../user/user.schema";
import { authConstants } from "../auth/auth.constants";
import { userConstants } from "../user/user.constants";



const getSchoolDataById = (schoolId: string) => {
  const schoolIndex = schoolSchema.getIndex(schoolId);
  if (schoolIndex !== -1) {
    const data = schoolSchema.getById(schoolIndex);
    return data;
  }
  throw schoolConstants.NOT_FOUND;

}

const updateSchoolData = (updatedSchoolData: IschoolData, id: string) => {
  const userIndex = userSchema.getIndexById(id);
  const assignedSchools = UserSchema.userData[userIndex].assignedSchools || '';
  if (assignedSchools.includes(updatedSchoolData.schoolId)) {
    schoolSchema.update(updatedSchoolData, id);
    return schoolConstants.UPDATED;
  }

  throw authConstants.INVALID_CREDENTIALS;
}



const addSchool = (schoolDetails: any) => {
  const response = schoolSchema.add(schoolDetails);
  if (response.length !== 0) {
    return schoolConstants.ADDED
  }

  throw schoolConstants.FAILED
}

const getAllSchools = () => {
  const data = schoolSchema.getAll();
  if (data.length !== 0) {
    return data;
  }
  throw userConstants.NO_SCHOOLS;
}

const editSchool = (updatedSchoolData: IschoolData, id: string) => {
  const schoolIndex = schoolSchema.getIndex(updatedSchoolData.schoolId);
  SchoolSchema.schoolData[schoolIndex] = updatedSchoolData;
  schoolSchema.update(updatedSchoolData, id);
  return schoolConstants.UPDATED;
};

const deleteSchool = (schoolId: string) => {
  const schoolIndex = schoolSchema.getIndex(schoolId);
  if (schoolIndex !== -1) {
    const isDeleted = schoolSchema.delete(schoolId, schoolIndex);
    console.log(isDeleted);
    if (isDeleted) {
      return schoolConstants.DELETED;
    }

  }
  throw schoolConstants.NOT_FOUND;

};

export default { getSchoolDataById, updateSchoolData, addSchool, getAllSchools, editSchool, deleteSchool }