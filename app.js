// importing modules
import express, { urlencoded } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import path from "path";
import UserController from "./controllers/userController.js";
import JobController from "./controllers/jobsController.js";
import ApplicantController from "./controllers/applicantController.js";
import { auth } from "./middlewares/authorize.js";
import { uploadFile } from "./middlewares/uploadResume.js";

// creating instances
const port = 3200;
const app = express();
const usersController = new UserController();
const jobsController = new JobController();
const applicantsController = new ApplicantController();

// setting up view engine & static files
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

// creating session for application security
app.use(
  session({
    secret: "ApplicationSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// application level middlewares
app.use(express.json());
app.use(expressEjsLayouts);
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

// implementing user routes
app.get("/", usersController.getHome);
app.get("/register", usersController.getUserRegister);
app.get("/login", usersController.getUserLogin);
app.get("/404", usersController.getError);
app.get("/logout", usersController.getUserLogout);
app.post("/register", usersController.postUserRegister);
app.post("/login", usersController.postUserLogin);
// jobs routes
app.get("/jobs", jobsController.getAllJobs);
app.get("/postjob", jobsController.getPostJobForm);
app.get("/job/:id", jobsController.getJobDetails);
app.post("/postjob", jobsController.postNewJob);
app.get("/job/update/:id", jobsController.getUpdateJobDetails);
app.post("/job/update/:id", jobsController.updateJob);
app.get("/job/delete/:id", jobsController.deleteJob);
// applicants routes
app.get("/job/applicants/:id", applicantsController.getAllApplicants);
app.post(
  "/apply/:id",
  uploadFile.single("resume"),
  applicantsController.postApplyJob
);

// running server
app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
