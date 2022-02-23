/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from "express";
import patientService from "../services/patientService";
import { Entry } from "../types";
import toNewPatientEntry from "../utils";
import { parseEntry } from "../utils";

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

router.post("/:id/entries", (req, res) => {
  try {
    const id: string = req.params.id;

    const patient = patientService.getPatientById(id);
    const newPatient = toNewPatientEntry(patient);
    const newEntry: Entry = parseEntry(req.body);
    res.send(patientService.updatePatient(newPatient, newEntry));
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    }
  }
});
router.get("/:id", (req, res) => {
  const id: string = req.params.id;

  res.send(patientService.getPatientById(id));
});

export default router;
