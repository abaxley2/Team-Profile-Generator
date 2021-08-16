// dependencies added
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// library files linked
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
// output linked

// referenced the solved folder to add these paths
const moveToFolder = path.resolve(__dirname, "dist");
const outputPath = path.join(moveToFolder, "my-team.html");

const generateHTML = require("./dist/generateHTML.js");

// setup up arrays
let employees = [];

// error handling
const errorMessage = (error) => {
  var error = document.getElementById("error");
  error.textContent = "Unable to create Team!";
};

// functions for users

// manager inquirer
inquirer
  .prompt([
    {
      type: "input",
      message: "What is this team's manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
    {
      type: "list",
      message: "What would you like to do next?",
      choices: ["Add Engineer", "Add Intern", "Set team and EXIT"],
      name: "userChoice",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    if (answers.userChoice === "Add Engineer") {
      makeEngineer();
    } else if (answers.userChoice === "Add Intern") {
      makeIntern();
    } else if (answers.userChoice === "Set team and EXIT") {
      console.log("Team Created!");
      console.log(employees);
      makeTeam();
    }
  });

// add Engineer

function makeEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is this engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is this engineer's github username?",
        name: "github",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Set team and EXIT"],
        name: "userChoice",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      if (answers.userChoice === "Add Engineer") {
        makeEngineer();
      } else if (answers.userChoice === "Add Intern") {
        makeIntern();
      } else if (answers.userChoice === "Set team and EXIT") {
        console.log("Team Created!");
        console.log(employees);
        makeTeam();
      }
    });
}

// add Intern
function makeIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is this intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What school did this intern attend?",
        name: "school",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Set team and EXIT"],
        name: "userChoice",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      if (answers.userChoice === "Add Engineer") {
        makeEngineer();
      } else if (answers.userChoice === "Add Intern") {
        makeIntern();
      } else if (answers.userChoice === "Set team and EXIT") {
        console.log("Team Created!");
        console.log(employees);
        makeTeam();
      }
    });
}

function makeTeam() {
  // had to reference the solved folder to get this as I could not get this function to work.
  if (!fs.existsSync(moveToFolder)) {
    fs.mkdirSync(moveToFolder);
  }
  fs.writeFileSync(outputPath, generateHTML(employees), errorMessage);
}
