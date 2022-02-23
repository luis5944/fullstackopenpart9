import {
  Patient,
  NonSensitivePatient,
  NewPatient,
  PublicPatient,
  Entry,
} from "../types";
import patients from "../../data/patients";
import { v1 as uuid } from "uuid";

let patientsData: Array<Patient> = patients;

const getAllPatients = (): Array<NonSensitivePatient> => {
  return patientsData.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};
const savePatient = (patient: NewPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const newPatient: Patient = { ...patient, id: uuid() };
  patientsData.push(newPatient);
  console.log(patientsData);
  return newPatient;
};

const updatePatient = (
  patient: NewPatient,
  newEntry: Entry
): Patient | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient: Patient = { ...patient, id: uuid() };
  patientsData = patientsData.map((p) => {
    if (p.name === patient.name) {
      return { ...p, entries: [...p.entries, newEntry] };
    }

    return p;
  });
  const p: Patient | undefined = patientsData.find(
    (p) => p.name === newPatient.name
  );

  return p;
};

const getPatientById = (id: string): PublicPatient | undefined => {
  const findPatient = patientsData.find((p) => p.id === id);
  return findPatient;
};

export default {
  getAllPatients,
  savePatient,
  getPatientById,
  updatePatient,
};
