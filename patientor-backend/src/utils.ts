import { Gender, NewPatient } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatient => {
  const newPatient: NewPatient = {
    name: parseName(object.name, "name"),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseName(object.ssn, "ssn"),
    gender: parseGender(object.gender),
    occupation: parseName(object.occupation, "occupation"),
  };
  return newPatient;
};

const parseName = (name: unknown, type: string): string => {
  if (!name || !isString(name)) {
    throw new Error(`Incorrect or missing ${type}`);
  }
  return name;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};
export default toNewPatientEntry;
