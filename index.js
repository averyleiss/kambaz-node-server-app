import express from 'express'
import session from "express-session";
import cors from "cors";
import "dotenv/config";

import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from './Kambaz/Assignments/routes.js';
import EnrollmentRoutes from './Kambaz/Enrollments/routes.js';

const app = express()

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, 
      sameSite: "lax"    
    }
  };
  
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }

app.use(cors({   
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
}));
app.use(express.json());

app.use(session(sessionOptions));

app.use((req, res, next) => {
    console.log("Cookies:", req.headers.cookie);
    console.log("Session:", req.session);
    next();
  });


UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
Lab5(app);
Hello(app);
ModuleRoutes(app);


app.listen(process.env.PORT || 4000)