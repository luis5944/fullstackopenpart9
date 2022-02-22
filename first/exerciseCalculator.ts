interface valuesExercise {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface valuesEx {
  days: Array<number>;
  targetEx: number;
}

const parseArgumentsExercises = (
  days: Array<number>,
  targetEx: number
): valuesEx => {
  const daysR: Array<number> = days.flatMap((value, index) => {
    return index > 2 ? +value : [];
  });

  if (isNaN(targetEx) || daysR.some(isNaN)) {
    throw new Error("malformatted parameters");
  }

  return {
    days,
    targetEx,
  };
};

const calculateExercises = (
  days: Array<number>,
  target: number
): valuesExercise => {
  const periodLength: number = days.length;
  const trainingDays: number = days.filter((t) => t > 0).length;

  const totalHoursExercise: number = days.reduce((prev, curr) => {
    return prev + curr;
  });
  const average: number = totalHoursExercise / periodLength;
  const success: boolean = average >= target;
  let rating: number;
  let ratingDescription: string;
  if (average < target) {
    rating = 1;
    ratingDescription = "That's not training at all";
  } else if (average == target) {
    rating = 2;
    ratingDescription = "Not bad";
  } else {
    rating = 3;
    ratingDescription = "Calm down...";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

export default {
  parseArgumentsExercises,
  calculateExercises,
};
