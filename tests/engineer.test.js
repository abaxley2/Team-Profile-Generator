const Engineer = require("../library/engineer");

test("Can set GitHUb account with constructor", () => {
  const testValue = "GitHubTest";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});
