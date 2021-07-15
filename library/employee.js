const fs = require('fs');
const inquirer = require('inquirer');

const getName = [
    inquirer
        .prompt({
            type: 'input',
            message: 'What is your name?',
            name: 'employeeName',
        })
        .then (({
            employeeName
        })=> {
        const makehtml = 
    `
    
    `
    })
];