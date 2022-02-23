"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send(patientService_1.default.getAllPatients());
});
router.post("/", (req, res) => {
    try {
        const newPatient = (0, utils_1.default)(req.body);
        const patient = patientService_1.default.savePatient(newPatient);
        res.send(patient);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send(error.message);
        }
    }
});
exports.default = router;
