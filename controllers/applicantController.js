import ApplicantModel from "../models/applicantModel.js";

export default class ApplicantController {
  getAllApplicants(req, res) {
    const applicants = ApplicantModel.getApplicants();
    res.render("applicants", {
      applicants: applicants,
      userEmail: req.session.userEmail,
    });
  }
  postApplyJob(req, res) {
    const { name, eamil, contact, resumePath } = req.body;
    console.log("appppppp-------->", req.body);
    const applicant = new ApplicantModel(name, eamil, contact, resumePath);
    ApplicantModel.addApplicant(applicant);
    res.redirect("/jobs");
  }
}
