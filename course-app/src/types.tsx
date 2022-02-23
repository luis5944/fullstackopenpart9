interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CoursePartBaseTwo extends CoursePartBase {
  description: string;
}

export interface CourseNormalPart extends CoursePartBaseTwo {
  type: "normal";
}

export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CoursePartBaseTwo {
  type: "submission";
  exerciseSubmissionLink: string;
}

export interface CourseRequirementsPart extends CoursePartBaseTwo {
  type: "special";
  requirements: Array<string>;
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseRequirementsPart;

export interface CourseName {
  courseName: string;
}

export interface CourseParts {
  courseParts: Array<CoursePart>;
}

export interface Course {
  course: CoursePart;
}
