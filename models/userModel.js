export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static getUsers() {
    return users;
  }
  static addUser(name, email, password) {
    return users.push(new UserModel(users.length + 1, name, email, password));
  }
  static isValid(email, password) {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  }
}

const users = [];
