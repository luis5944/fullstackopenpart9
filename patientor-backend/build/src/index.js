"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnoseRoute_1 = __importDefault(require("./routes/diagnoseRoute"));
const patientRoute_1 = __importDefault(require("./routes/patientRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const BASE_URL = "/api";
app.use(`${BASE_URL}/diagnoses`, diagnoseRoute_1.default);
app.use(`${BASE_URL}/patients`, patientRoute_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});
