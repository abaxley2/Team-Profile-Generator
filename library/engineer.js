const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, empId, email, github) {
    super(name, empId, email);
    this.github = github;
  }

  role() {
    return "Engineer";
  }

  github() {
    return this.github;
  }
}

module.exports = Engineer;
