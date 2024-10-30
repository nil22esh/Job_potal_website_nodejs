import UserModel from "../models/userModel.js";

export default class UserController {
  getHome(req, res) {
    res.render("home");
  }
  getUserLogin(req, res) {
    res.render("login");
  }
  getUserRegister(req, res) {
    res.render("register");
  }
  getError(req, res) {
    res.render("404");
  }
  postUserRegister(req, res) {
    const { name, email, password } = req.body;
    const user = new UserModel({
      name,
      email,
      password,
    });
    UserModel.addUser(user);
    res.render("login");
  }
  postUserLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValid(email, password);
    if (!user) {
      return res.render("login", (err) => {
        res.send("Invalid Credentials!");
      });
    }
    req.session.userEmail = email;
    res.render("home", { userEmail: req.session.userEmail });
  }
  getUserLogout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/login");
      }
    });
    // res.clearCookie("userEmail");
  }
}
