const Employee = require("../library/employee.js");

test("Can populate object from Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
