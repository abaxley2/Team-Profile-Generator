// dependencies added
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const render = require("./dist/renderpage.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team-profile.html");

// setup up arrays
const employees = [];
const employeeIDs = [];

// functions for users
function userPrompt() {
  function makeManager() {}

  function makeTeam() {}

  function makeDirectory() {}
}

userPrompt();
