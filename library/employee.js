const fs = require('fs');
const inquirer = require('inquirer');

const employee = [
    inquirer
        .prompt({
            type: 'input',
            message: 'What is your name?',
            name: 'employee',
        })
        .then (({
            employee
        })=> {
        const generateName = 
    `
    <div class="name"><h3>${employeeName}</h3></div>
    `;
    getName(employee,generateName);
    })
];

function getName(employeeName,generateName)

const getId = [
    inquirer
        .prompt({
            type: 'input',
            message: 'What is your ID?',
            name: 'employeeID',
        })
        .then (({
            employeeID
        })=> {
        const generateName = 
    `
    <div class="name"><h3>${employeeName}</h3></div>
    `
    })
];