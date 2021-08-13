// dependencies added
const fs = require("fs");
const inquirer = require("inquirer");
// library files linked
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
// created a path
const path = require("path");
const render = require("./dist/renderpage");
// added these because I couldn't figure out how to do it without looking
const findDirectory = path.resolve(__dirname, "dist");
const createHTML = path.join(findDirectory, "team-profile.html");

// setup up arrays
const employees = [];
const employeeIDs = [];

// functions for users
function userPrompt() {
  function makeManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is this manager's name?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter a name.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is this manager's id number?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter an id number.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is this manager's email address?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter the manager's email address.";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is this manager's office number?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter an office number.";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        employees.push(manager);
        employeeIDs.push(answers.managerId);
        makeTeam();
      });
  }

  function makeTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Create Team and Exit"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.employeeType) {
          case "Engineer":
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "engineerName",
                  message: "What is this engineer's name?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter this engineer's name.";
                  },
                },
                {
                  type: "input",
                  name: "engineerId",
                  message: "What is this engineer's id?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter this engineer's id.";
                  },
                },
                {
                  type: "input",
                  name: "engineerEmail",
                  message: "What this engineer's email?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter the employee's email address.";
                  },
                },
                {
                  type: "input",
                  name: "engineerGithub",
                  message: "What is this engineer's GitHub?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter a GitHub name.";
                  },
                },
              ])
              .then((answers) => {
                const engineer = new Engineer(
                  answers.engineerName,
                  answers.engineerId,
                  answers.engineerEmail,
                  answers.engineerGithub
                );
                employees.push(engineer);
                employeeIDs.push(answers.engineerId);
                makeTeam();
              });
            break;
          case "Intern":
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "internName",
                  message: "What is this intern's name?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter this intern's name.";
                  },
                },
                {
                  type: "input",
                  name: "internId",
                  message: "What is this intern's id?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter this intern's id.";
                  },
                },
                {
                  type: "input",
                  name: "internEmail",
                  message: "What this intern's email?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter the intern's email address.";
                  },
                },
                {
                  type: "input",
                  name: "internSchool",
                  message: "Where did this intern go to school?",
                  validate: (answer) => {
                    if (answer) {
                      return true;
                    }
                    return "Please enter a university name.";
                  },
                },
              ])
              .then((answers) => {
                const intern = new Intern(
                  answers.internName,
                  answers.internId,
                  answers.internEmail,
                  answers.internSchool
                );
                employees.push(intern);
                employeeIDs.push(answers.internId);
                makeTeam();
              });
            break;
          default:
            makeDirectory();
        }
      });
  }
  // this is the part I had trouble with and had to look up.
  function makeDirectory() {
    if (!fs.existsSync(findDirectory)) {
      fs.mkdirSync(findDirectory);
    }
    fs.writeFileSync(createHTML, render(employees));
  }

  makeManager();
}

userPrompt();
