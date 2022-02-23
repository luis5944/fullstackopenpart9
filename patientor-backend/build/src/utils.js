"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object) => {
    const newPatient = {
        name: parseName(object.name, "name"),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseName(object.ssn, "ssn"),
        gender: parseGender(object.gender),
        occupation: parseName(object.occupation, "occupation"),
    };
    return newPatient;
};
const parseName = (name, type) => {
    if (!name || !isString(name)) {
        throw new Error(`Incorrect or missing ${type}`);
    }
    return name;
};
const isString = (text) => {
    return typeof text === "string" || text instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date: " + date);
    }
    return date;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(types_1.Gender).includes(param);
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error("Incorrect or missing gender: " + gender);
    }
    return gender;
};
exports.default = toNewPatientEntry;
