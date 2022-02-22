interface values {
  height: number;
  weight: number;
}

const parseData = (height: number, weight: number): values => {
  if (isNaN(height) || isNaN(weight)) {
    throw new Error("malformatted parameters");
  }

  return {
    height,
    weight,
  };
};

type Result =
  | "Underweight (Unhealthy)"
  | "Normal range (Healthy)"
  | "Overweight I (At risk)"
  | "Overweight II (Moderately obese)"
  | "Overweight III (Severely obese)";

const calculateBmi = (heigh: number, weight: number): Result => {
  const result: number = (weight / heigh / heigh) * 10000;

  if (result < 18.5) {
    return "Underweight (Unhealthy)";
  } else if (result >= 18.5 && result <= 22.9) {
    return "Normal range (Healthy)";
  } else if (result >= 23 && result <= 24.9) {
    return "Overweight I (At risk)";
  } else if (result >= 25 && result <= 29.9) {
    return "Overweight I (At risk)";
  } else {
    return "Overweight III (Severely obese)";
  }
};

export default {
  parseData,
  calculateBmi,
};
