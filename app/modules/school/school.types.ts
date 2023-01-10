export interface IschoolData{
    schoolId: string;
    schoolName: string;
    [key:string]:any ;
}



export interface IclientSchoolDetails {
    schoolName : string;
    startClass:number;
    endClass:number;
    totalClasses : number;
    subjects:string[]
}


export type status = 1 | "";
export interface IsubjectStatus{
    [key:string] :status;
}















// type subjectStatus = "partial" | "None" | "Full";

// type subjectType = {
//     subjects: Object,
//     status:subjectStatus,
//     updatedBy:string[],
//     lastUpdatedAt:Date
// }



// type classType = {
//     [key: string] : subjectType,
    
// }