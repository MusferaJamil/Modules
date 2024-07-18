"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudentOnSite = exports.getStudentData = exports.getOnSiteStudents = exports.getStudents = void 0;
const data_1 = __importDefault(require("./data"));
const getStudents = () => {
    return data_1.default;
};
exports.getStudents = getStudents;
const getOnSiteStudents = () => {
    const result = data_1.default.filter((student) => student.isOnSite == true);
    // const result = student.filter((student)=> student.isOnSite)
    return result;
};
exports.getOnSiteStudents = getOnSiteStudents;
const getStudentData = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo == rollNo);
    return foundUser;
};
exports.getStudentData = getStudentData;
const isStudentOnSite = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo == rollNo && student.isOnSite);
    if (foundUser) {
        return true;
    }
    else {
        return false;
    }
};
exports.isStudentOnSite = isStudentOnSite;
