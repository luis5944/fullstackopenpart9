/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Entry, Gender, NewPatient } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatient => {
  const newPatient: NewPatient = {
    name: parseName(object.name, "name"),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseName(object.ssn, "ssn"),
    gender: parseGender(object.gender),
    occupation: parseName(object.occupation, "occupation"),
    entries: parseEntries(object.entries),
  };
  return newPatient;
};

export const parseEntries = (entries: any): Entry[] => {
  if (!entries) {
    throw new Error(`Incorrect or missing entries: ${entries}`);
  }
  return entries;
};
export const parseEntry = (entry: Entry): Entry => {
  if (!entry) {
    throw new Error(`Incorrect entry: ${entry}`);
  }
  return entry;
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
