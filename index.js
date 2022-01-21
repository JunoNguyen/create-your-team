const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateTeam = require('./src/page-template');

const team = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id',
    },
    {
        type: 'list',
        message: 'What is your position?',
        name: 'position',
        choices: ['Manager','Engineer','Intern'],
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
        when: ((response) => response.position.toLowerCase() === 'manager'),
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        when: ((response) => response.position.toLowerCase() === 'engineer'),
    },
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school',
        when: ((response) => response.position.toLowerCase() === 'intern'),
    }
];

const printCard = inquirer
    .prompt(team)
    .then((response) => {
        console.log(response)
        if(response.position.toLowerCase() === 'manager') {
            var manager = generateTeam(response);
            console.log(manager);
        }
    })