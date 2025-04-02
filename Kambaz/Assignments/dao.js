
import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createAssignment(courseId, assignment) {
  const newAssignment = { ...assignment, _id: uuidv4(), course: courseId };
  Database.assignments.push(newAssignment);
  return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
  return Database.assignments.filter((assignment) => assignment.course === courseId);
}

export function updateAssignment(assignmentId, updates) {
  const assignment = Database.assignments.find((a) => a._id === assignmentId);
  if (assignment) {
    Object.assign(assignment, updates);
  }
  return assignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter((a) => a._id !== assignmentId);
  return { status: 204 };
}
