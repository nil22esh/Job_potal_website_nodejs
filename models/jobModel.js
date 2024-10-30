import ApplicantModel from "./applicantModel.js";

export default class JobModel {
  constructor(
    id,
    jobcategory,
    jobdesignation,
    joblocation,
    companyname,
    salary,
    applyby,
    skillsrequired = [],
    numberofopenings,
    jobposted,
    applicants = []
  ) {
    this.id = id;
    this.jobcategory = jobcategory;
    this.jobdesignation = jobdesignation;
    this.joblocation = joblocation;
    this.companyname = companyname;
    this.salary = salary;
    this.applyby = applyby;
    this.skillsrequired = skillsrequired;
    this.numberofopenings = numberofopenings;
    this.jobposted = jobposted || new Date();
    this.applicants = applicants.map(
      (applicant) =>
        new ApplicantModel(
          applicant.applicantid,
          applicant.name,
          applicant.email,
          applicant.contact,
          applicant.resumePath
        )
    );
  }
  static getAllJobs() {
    return jobs;
  }
  static addNewJob(
    jobcategory,
    jobdesignation,
    joblocation,
    jobposted,
    companyname,
    salary,
    skillsrequired,
    applyby,
    numberofopenings
  ) {
    const newJobs = new JobModel(
      jobs.length + 1,
      jobcategory,
      jobdesignation,
      joblocation,
      jobposted,
      companyname,
      salary,
      skillsrequired,
      applyby,
      numberofopenings
    );
    return jobs.push(newJobs);
  }
  static getJobId(id) {
    return jobs.find((job) => job.id === id);
  }
  static updateJob(jobObj) {
    const index = jobs.findIndex((job) => job.id === jobObj.id);
    jobs[index] = jobObj;
  }
  static deleteJob(id) {
    const index = jobs.findIndex((j) => j.id == id);
    jobs.splice(index, 1);
  }
}

const jobs = [
  new JobModel(
    1,
    "Software Engineering",
    "Backend Developer",
    "Pune Remote",
    "TechCorp",
    "$70,000",
    "2024-12-31T00:00:00.000Z",
    [
      "Node.js",
      "Data Structures & Algo",
      "Express",
      "MongoDB",
      "Express",
      "SQL",
    ],
    3,
    "2024-10-25T10:00:00.000Z",
    [
      {
        applicantid: "a1",
        name: "Alice Johnson",
        email: "alice@example.com",
        contact: "321-654-0987",
        resumePath: "/upload/alice_johnson.pdf",
      },
      {
        applicantid: "a2",
        name: "Bob Brown",
        email: "bob@example.com",
        contact: "456-789-0123",
        resumePath: "/upload/bob_brown.pdf",
      },
    ]
  ),
  new JobModel(
    2,
    "SDE",
    "Full Stack Developer",
    "Delhi Remote",
    "TechCorp",
    "$70,000",
    "2024-12-31T00:00:00.000Z",
    [
      "Node.js",
      "Java",
      "Python",
      "Express",
      "MongoDB",
      "Data Structures & Algo",
    ],
    3,
    "2024-10-25T10:00:00.000Z",
    [
      {
        applicantid: "a1",
        name: "Alice Johnson",
        email: "alice@example.com",
        contact: "321-654-0987",
        resumePath: "/upload/alice_johnson.pdf",
      },
      {
        applicantid: "a2",
        name: "Bob Brown",
        email: "bob@example.com",
        contact: "456-789-0123",
        resumePath: "/upload/bob_brown.pdf",
      },
    ]
  ),
  new JobModel(
    3,
    "Data Analyst",
    "Data Science",
    "India",
    "Amazon",
    "$100,000",
    "2024-12-31T00:00:00.000Z",
    ["Python", "Data Structures & Algo", "Machine Learning", "Numpy", "Django"],
    3,
    "2024-10-25T10:00:00.000Z",
    [
      {
        applicantid: "a1",
        name: "Alice Johnson",
        email: "alice@example.com",
        contact: "321-654-0987",
        resumePath: "/upload/alice_johnson.pdf",
      },
      {
        applicantid: "a2",
        name: "Bob Brown",
        email: "bob@example.com",
        contact: "456-789-0123",
        resumePath: "/upload/bob_brown.pdf",
      },
    ]
  ),
];
