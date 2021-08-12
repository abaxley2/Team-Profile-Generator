const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, empId, email, school) {
    super(name, empId, email);
    this.school = school;
  }

  role() {
    return "Intern";
  }

  school() {
    return this.school;
  }
}

module.exports = Intern;
