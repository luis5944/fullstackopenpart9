/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getAllPatients());
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);
    const patient = patientService.savePatient(newPatient);
    res.send(patient);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    }
  }
});

export default router;
