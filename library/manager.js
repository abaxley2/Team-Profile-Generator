const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, empId, email, office) {
    super(name, empId, email);
    this.office = office;
  }

  role() {
    return "Manager";
  }

  office() {
    return this.office;
  }
}

module.exports = Manager;
