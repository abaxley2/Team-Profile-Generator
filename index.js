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
const managerArray = [];
const engineerArray = [];
const internArray = [];

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
      message: "What is the manager's email address.",
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
    if (response.userChoice === "Add Engineer") {
      makeEngineer();
    } else if (response.userChoice === "Add Intern") {
      makeIntern();
    } else if (response.userChoice === "Set team and EXIT") {
      console.log("Team Created!");
      const errorMessage = (error) => {
        var error = document.getElementById("error");
        error.textContent = "Unable to create Team!";
      };
      fs.writeFile(
        "./dist/MyTeam.html",
        createHTML.createHTML(managerArray, engineerArray, internArray),
        errorMessage
      );
    }
  });

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
        message: "What is this engineer's email address.",
        name: "email",
      },
      {
        type: "input",
        message: "What is this engineer's office number?",
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
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      engineerArray = engineer;
      if (response.userChoice === "Add Engineer") {
        makeEngineer();
      } else if (response.userChoice === "Add Intern") {
        makeIntern();
      } else if (response.userChoice === "Set team and EXIT") {
        console.log("Team Created!");
        const errorMessage = (error) => {
          var error = document.getElementById("error");
          error.textContent = "Unable to create Team!";
        };
        fs.writeFile(
          "./dist/MyTeam.html",
          createHTML.createHTML(managerArray, engineerArray, internArray),
          errorMessage
        );
      }
    });
}
