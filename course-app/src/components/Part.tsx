import React from "react";

import { Course } from "../types";

const Part = ({ course }: Course) => {
  switch (course.type) {
    case "normal":
      return (
        <div>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>
            {course.name} {course.exerciseCount}
          </p>
          <p style={{ marginTop: 0 }}>{course.description}</p>
        </div>
      );
    case "groupProject":
      return (
        <div>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>
            {course.name} {course.exerciseCount}
          </p>
          <p style={{ marginTop: 0 }}>
            Project exercises {course.groupProjectCount}
          </p>
        </div>
      );
    case "submission":
      return (
        <div>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>
            {course.name} {course.exerciseCount}
          </p>
          <p style={{ marginTop: 0 }}>{course.description}</p>
          <p style={{ marginTop: 0 }}>
            Submit to {course.exerciseSubmissionLink}
          </p>
        </div>
      );
    case "special":
      return (
        <div>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>
            {course.name} {course.exerciseCount}
          </p>
          <p style={{ marginTop: 0 }}>{course.description}</p>
          Required Skills:
          <ul style={{ marginTop: 0 }}>
            {course.requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default Part;
