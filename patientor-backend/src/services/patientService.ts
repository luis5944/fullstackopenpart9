import { Patient, NonSensitivePatient, NewPatient } from "../types";
import patients from "../../data/patients";
import { v1 as uuid } from "uuid";

const patientsData: Array<Patient> = patients;

const getAllPatients = (): Array<NonSensitivePatient> => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
const savePatient = (patient: NewPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient: Patient = { ...patient, id: uuid() };
  patientsData.push(newPatient);
  return newPatient;
};
export default {
  getAllPatients,
  savePatient,
};
