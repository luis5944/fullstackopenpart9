import diagnoses from "../../data/diagnoses";
import { Diagnosis } from "../types";

const diagnosesData: Array<Diagnosis> = diagnoses;

const getAllDiagnoses = (): Array<Diagnosis> => {
  return diagnosesData;
};

export default {
  getAllDiagnoses,
};
