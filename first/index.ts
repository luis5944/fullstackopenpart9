/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from "express";
import bmiCalculator from "./bmiCalculator";
import exerciseCalculator from "./exerciseCalculator";

const app = express();
app.use(express.json());
const PORT = 3003;

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  try {
    if (!req.query.height || !req.query.weight) {
      throw new Error("malformatted parameters");
    }
    const { height, weight } = bmiCalculator.parseData(
      Number(req.query.height),
      Number(req.query.weight)
    );

    const bmi: string = bmiCalculator.calculateBmi(
      Number(height),
      Number(weight)
    );
    res.send({
      weight,
      height,
      bmi,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.send({ error: error.message });
    }
  }
});

app.post("/exercises", (req, res) => {
  try {
    const { daily_exercises, target } = req.body;

    if (!daily_exercises || !target) {
      throw new Error("parameters missing");
    }
    const { days, targetEx } = exerciseCalculator.parseArgumentsExercises(
      daily_exercises,
      target
    );

    res.send(exerciseCalculator.calculateExercises(days, targetEx));
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.send({ error: error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running: PORT: ${PORT}`);
});
