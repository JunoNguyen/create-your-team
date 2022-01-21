const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateTeam = require('./src/page-template');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        let newMember;
        if (response.position.toLowerCase() === "engineer") {
            newMember = new Engineer(response.name, response.id, response.email);
        } else if (response.position.toLowerCase() === "intern") {
            newMember = new Intern(response.name, response.id, response.email);
        } else if (response.position.toLowerCase() === "manager") {
            newMember = new Manager(response.name, response.id, response.email);
        }
        console.log(newMember);
        var test = generateTeam(newMember);
        fs.writeFile('test.html', test, (err) => {
            err ? console.log(err) : console.log('Team created!')
        })
    });
    