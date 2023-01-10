import { subjectConstants } from "./subjects.constants";
import { subjectSchema } from "./subjects.schema"

const getAllSubjects = ()=>{
    const data = subjectSchema.get();
    if(data.length === 0) throw subjectConstants.NO_SUBJECTS;
    return data;
}


export default {getAllSubjects}

