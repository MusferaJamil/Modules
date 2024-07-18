// create student data

// import * as student from "./student";
// console.log('student:', student);

// const result = student.getStudents();
// console.log('result:', result);

// const onSiteStudent = student.getOnSiteStudents();
// console.log("onSiteStudent", onSiteStudent);

import {
  getOnSiteStudents,
  getStudentData,
  getStudents,
  isStudentOnSite,
} from "./student";

// const result = getStudents();
// console.log('result:', result);

// const onSiteStudent = getOnSiteStudents();
// console.log("onSiteStudent", onSiteStudent);

const result1 = getStudentData(20245);
console.log("result1:", result1);

const result2 = getStudentData(123456);
console.log("result2:", result2);

const result3 = isStudentOnSite(20456);
console.log("result3:", result3);

const result4 = isStudentOnSite(20475);
console.log("result4:", result4);

// import getOnSiteStudents, {getStudents} from "./student"

// import getOnSiteStudents, {getStudents as something} from "./student"
// const result = something();
