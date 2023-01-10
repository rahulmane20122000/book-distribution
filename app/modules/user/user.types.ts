
export interface IUser{
    id:string;
    username:string;
    email:string;
    password:string;
    role:string;
    assignedSchools?:string[];
    accountStatus:status;
    
}

type status = "approved" | "pending" | "rejected" | "deactivate";
