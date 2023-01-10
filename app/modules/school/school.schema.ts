import { v4 } from "uuid";
import { UserSchema } from "../user/user.schema";
import { IclientSchoolDetails, IschoolData, IsubjectStatus } from "./school.types";

export class SchoolSchema {
  public static schoolData: IschoolData[] = [
    {
      schoolId: "12345678",
      schoolName: "Pune Public School",
      "2022": {
        "1": {
          subjects: { maths: 1, science: "", english: 1 },
          status: "partial",
          updatedBy: ["1001", "1005"],
          lastUpdatedAt: "21/09/2022 12:07:33"
        },
        "2": {
          subjects: { maths: 1, science: "", english: 1 },
          status: "partial",
          updatedBy: ["1001", "1005"],
          lastUpdatedAt: "21/09/2022 12:07:33"
        },
        "3": {
          subjects: { maths: 1, science: "", english: 1 },
          status: "partial",
          updatedBy: ["1001", "1005"],
          lastUpdatedAt: "21/09/2022 12:07:33"
        },

      }
    }
  ];

  getIndex(id: string) {
    return SchoolSchema.schoolData.findIndex((data) => data.schoolId === id);
  }

  add(schoolDetails: IclientSchoolDetails) {

    const { schoolName, endClass, startClass, subjects } = schoolDetails;
    const year = new Date().getFullYear()
    let subjectStatus: IsubjectStatus = {};
    let classes: any = {};

    subjects.forEach((subject: string) => {
      subjectStatus[subject] = "";
    });

    for (let standard = Number(startClass); standard <= Number(endClass); standard++) {
      classes[standard] = { subjects: { ...subjectStatus }, status: "None", updatedBy: [], lastUpdatedAt: new Date().toLocaleString() };
    }

    SchoolSchema.schoolData.push({
      schoolId: v4(),
      schoolName: schoolName,
      [`${year}`]: classes,
    });

    return SchoolSchema.schoolData;
  }

  getAll() {
    return SchoolSchema.schoolData;
  }

  update(updateSchoolData: IschoolData, id: string) {
    const year = new Date().getFullYear();

    const schoolIndex = this.getIndex(updateSchoolData.schoolId);
    // SchoolSchema.schoolData[schoolIndex][year] = updateSchoolData.classes
    const updatedClass = updateSchoolData[year]; // 2022 // "class 1"
    for (let classes in updatedClass) {
      let currentClasss = SchoolSchema.schoolData[schoolIndex][year][classes];
      currentClasss = {
        ...currentClasss,
        ...updateSchoolData[year][classes],
      };
      let status = Object.values(currentClasss.subjects);
      let str = status.join("");
      status.length == str.length
        ? (currentClasss.status = "Full")
        : str.length
          ? (currentClasss.status = "Partial")
          : (currentClasss.status = "None");
      currentClasss.updatedBy.push(id);
      currentClasss.lastUpdatedAt = new Date().toLocaleString();
      SchoolSchema.schoolData[schoolIndex][year][classes] = currentClasss;
      console.log(currentClasss, SchoolSchema.schoolData[schoolIndex][year][classes]);
    }
    return true;
  }

  assign(distributorIndex: number, schoolIds: string[]) {
    const assignedSchools: any = UserSchema.userData[distributorIndex].assignedSchools;
    schoolIds.forEach((id) => assignedSchools.push(id));

  }

  getById(schoolIndex: number) {
    return SchoolSchema.schoolData[schoolIndex];
  }

  delete(schoolId: string, schoolIndex: number) {
    SchoolSchema.schoolData.splice(schoolIndex, 1);
    UserSchema.userData.forEach(({ assignedSchools }, index) => {
      let schoolIndex:any = assignedSchools?.indexOf(schoolId);
        if (schoolIndex != -1) {
          UserSchema.userData[index].assignedSchools?.splice(
            schoolIndex,
            1
          );
        }
    });
    return true;
  }


}

export const schoolSchema = new SchoolSchema();
