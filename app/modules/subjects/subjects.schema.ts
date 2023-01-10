class SubjectSchema {
    public static subjectsDB:string[] = ["Maths","English","Social Science","Psycology","Astronomy","Geography","Civics"];

    get(){
        return SubjectSchema.subjectsDB;
    }

}

export const subjectSchema = new SubjectSchema();