import express from "express";
import cors from "cors";
import diagnoseRouter from "./routes/diagnoseRoute";
import patientRouter from "./routes/patientRoute";
const app = express();
app.use(express.json());
app.use(cors());

const BASE_URL = "/api";

app.use(`${BASE_URL}/diagnoses`, diagnoseRouter);
app.use(`${BASE_URL}/patients`, patientRouter);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
