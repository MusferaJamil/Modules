import student from "./data";

export const getStudents = () => {
    return student;
};

export const getOnSiteStudents = ()=> {
    const result = student.filter((student)=> student.isOnSite == true) 
    // const result = student.filter((student)=> student.isOnSite)
    return result;
};

export const getStudentData = (rollNo : number)=> {
    const foundUser = student.find((student)=> student.rollNo == rollNo);
    return foundUser
};

export const isStudentOnSite = (rollNo : number)=>{
    const foundUser = student.find((student)=> student.rollNo == rollNo && student.isOnSite);
    if (foundUser){
        return true
    }
    else {
        return false
    }
};