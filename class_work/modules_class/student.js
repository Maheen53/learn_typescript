import students from "./data.js";
export const getStudentdata = () => {
    return students;
};
export const getonsitestudentlist = () => {
    const result = students.filter((students) => (students.isonsiteallowed));
    return result;
};
export const getstudentrn = (rollno) => {
    const found = students.find((students) => students.rollno === rollno);
    return found;
};
export const isstudentonsite = (rollno) => {
    const founduser = students.find((students) => students.rollno === rollno && students.isonsiteallowed);
    if (founduser) {
        return true;
    }
    else {
        return false;
    }
};
