import diagnoses from "../../data/diagnoses";
import { Diagnose } from "../types";

const diagnosesData: Array<Diagnose> = diagnoses;

const getAllDiagnoses = (): Array<Diagnose> => {
  return diagnosesData;
};

export default {
  getAllDiagnoses,
};
