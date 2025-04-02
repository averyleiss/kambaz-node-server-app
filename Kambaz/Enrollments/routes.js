import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);
  });

  app.get("/api/enrollments/user/:userId", (req, res) => {
    const enrollments = dao.findEnrollmentsForUser(req.params.userId);
    res.json(enrollments);
  });

  app.get("/api/enrollments/course/:courseId", (req, res) => {
    const userIds = dao.findUsersForCourse(req.params.courseId);
    res.json(userIds);
  });
}
