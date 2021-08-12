class Employee {
  constructor(name, empId, email) {
    this.name = name;
    this.empId = empId;
    this.email = email;
  }

  name() {
    return this.name;
  }

  empId() {
    return this.empId;
  }

  email() {
    return this.email;
  }

  role() {
    return "Employee";
  }
}

module.exports = Employee;
