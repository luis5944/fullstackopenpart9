import React from "react";
import { CourseParts } from "../types";
import Part from "./Part";

const Content = ({ courseParts }: CourseParts) => {
  return (
    <div>
      {courseParts.map((c) => {
        return <Part key={c.name} course={c} />;
      })}
    </div>
  );
};

export default Content;
