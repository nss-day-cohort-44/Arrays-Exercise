import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();

// Export a function named getStudentNames
// It should not accept any parameters`
// It should return an array of strings. Each string should be the full name of the student
export const getStudentNames = () => {
  return students.map((s) => `${s.firstName} ${s.lastName}`);
};

// Export a function named StudentList
// It should not accept any parameters
// It should return a single HTMLString that contains a <div> element for every student that looks like the following:
// Ex:
/*
  <div>
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
*/
export const StudentList = () => {
  return students
    .map((student) => {
      return `
        <div>
          <h1>${student.firstName} ${student.lastName}</h1>
          <h2>Cohort ${student.cohort}</h2>
        </div>
      `;
    })
    .join("");
};
