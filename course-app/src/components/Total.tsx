import React from "react";

interface TotalExercises {
  totalExercises: number;
}
const Total = ({ totalExercises }: TotalExercises) => {
  return (
    <div>
      <p>Number of exercises {totalExercises} </p>
    </div>
  );
};

export default Total;
