import JobModel from "../models/jobModel.js";

export default class JobController {
  getAllJobs(req, res) {
    let jobs = JobModel.getAllJobs();
    res.render("jobs", { jobs: jobs, userEmail: req.session.userEmail });
  }
  getPostJobForm(req, res) {
    res.render("postNewJob", { userEmail: req.session.userEmail });
  }
  postNewJob(req, res) {
    const {
      jobcategory,
      jobdesignation,
      joblocation,
      jobposted,
      companyname,
      salary,
      skillsrequired,
      applyby,
      numberofopenings,
    } = req.body;
    const job = new JobModel({
      jobcategory,
      jobdesignation,
      joblocation,
      jobposted,
      companyname,
      salary,
      skillsrequired,
      applyby,
      numberofopenings,
    });
    console.log("newJob-------->", job);
    JobModel.addNewJob(job);
    const jobs = JobModel.getAllJobs();
    res.render("jobs", { jobs: jobs, userEmail: req.session.userEmail });
  }
  getJobDetails(req, res) {
    const id = req.params.id;
    // console.log("id---------->", req.params);
    let job = JobModel.getJobId(Number(id));
    if (!job) {
      res.status(404).send({ message: "Job not found" });
    }
    res.render("viewDetails", { job: job, userEmail: req.session.userEmail });
  }
  getUpdateJobDetails(req, res) {
    const id = req.params.id;
    // console.log("id---------->", req.params);
    let job = JobModel.getJobId(Number(id));
    if (!job) {
      res.status(404).send({ message: "Job not found" });
    }
    res.render("updateJob", { job: job, userEmail: req.session.userEmail });
  }
  updateJob(req, res) {
    const id = req.params.id;
    let job = JobModel.getJobId(Number(id));
    JobModel.updateJob(req.body);
    // console.log("body------->", req.body);
    const jobs = JobModel.getAllJobs();
    res.render("viewdetails", { job: job, userEmail: req.session.userEmail });
  }
  deleteJob(req, res) {
    const id = req.params.id;
    // console.log("id---------->", req.params);
    JobModel.deleteJob(id);
    const jobs = JobModel.getAllJobs();
    res.render("jobs", { jobs: jobs, userEmail: req.session.userEmail });
  }
}
