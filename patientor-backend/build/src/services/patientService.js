"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const patientsData = patients_1.default;
const getAllPatients = () => {
    return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const savePatient = (patient) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newPatient = Object.assign(Object.assign({}, patient), { id: (0, uuid_1.v1)() });
    patientsData.push(newPatient);
    return newPatient;
};
exports.default = {
    getAllPatients,
    savePatient,
};
