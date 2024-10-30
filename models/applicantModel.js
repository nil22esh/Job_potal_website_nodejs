export default class ApplicantModel {
  constructor(applicantid, name, email, contact, resumePath) {
    this.applicantid = applicantid;
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.resumePath = resumePath;
  }
  static getApplicants() {
    return applicants;
  }
  static addApplicant(name, email, contact, resumePath) {
    const applicant = new ApplicantModel(
      applicants.length + 1,
      name,
      email,
      contact,
      resumePath
    );
    return applicants.push(applicants.length, name, email, contact, resumePath);
  }
}
const applicants = [
  {
    applicantid: "a1",
    name: "Alice Johnson",
    email: "alice@example.com",
    contact: "321-654-0987",
    resumePath: "/resumes/alice_johnson.pdf",
  },
  {
    applicantid: "a2",
    name: "Bob Brown",
    email: "bob@example.com",
    contact: "456-789-0123",
    resumePath: "/resumes/bob_brown.pdf",
  },
];
