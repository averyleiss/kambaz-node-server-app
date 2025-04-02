import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
}

export function findEnrollmentsForUser(userId) {
  return Database.enrollments.filter((e) => e.user === userId);
}

export function findUsersForCourse(courseId) {
  return Database.enrollments
    .filter((e) => e.course === courseId)
    .map((e) => e.user);
}