// dependencies added
const fs = require("fs");
const inquirer = require("inquirer");
// library files linked
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
// createHTML linked
const createHTML = require("./dist/renderpage.js");

// setup up arrays
let managerArray = [];
let engineerArray = [];
let internArray = [];

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
    managerArray = manager;
    if (answers.userChoice === "Add Engineer") {
      makeEngineer();
    } else if (answers.userChoice === "Add Intern") {
      makeIntern();
    } else if (answers.userChoice === "Set team and EXIT") {
      console.log("Team Created!");
      compileTeam();
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
      engineerArray = engineer;
      if (answers.userChoice === "Add Engineer") {
        makeEngineer();
      } else if (answers.userChoice === "Add Intern") {
        makeIntern();
      } else if (answers.userChoice === "Set team and EXIT") {
        console.log("Team Created!");
        compileTeam();
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
      internArray = intern;
      if (answers.userChoice === "Add Engineer") {
        makeEngineer();
      } else if (answers.userChoice === "Add Intern") {
        makeIntern();
      } else if (answers.userChoice === "Set team and EXIT") {
        console.log("Team Created!");
        compileTeam();
      }
    });
}

const errorMessage = (error) => {
  var error = document.getElementById("error");
  error.textContent = "Unable to create Team!";
};

function compileTeam() {
  fs.writeFile(
    "./dist/MyTeam.html",
    createHTML(managerArray, internArray, engineerArray),
    errorMessage
  );
}
