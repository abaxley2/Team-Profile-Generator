const Intern = require("../library/intern");

test("Can set school with constructor", () => {
  const testValue = "KSU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
