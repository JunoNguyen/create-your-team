const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateTeam = require('./src/page-template');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let newMember = [];

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

const addMore = [
    {
        type:'list',
        message: 'Would you like to add more members?',
        name: 'more',
        choices: ['Yes','No'],
    }
]

function test() {
    makeMember();
}

function makeMember() {
    inquirer
    .prompt(team)
    .then((response) => {
        // let newMember= [];
        if (response.position.toLowerCase() === "engineer") {
            newMember.push(new Engineer(response.name, response.id, response.email));
        } else if (response.position.toLowerCase() === "intern") {
            newMember.push(new Intern(response.name, response.id, response.email));
        } else if (response.position.toLowerCase() === "manager") {
            newMember.push(new Manager(response.name, response.id, response.email));
        }
        inquirer.prompt(addMore)
        .then(function(response) {
            if (response.more.toLowerCase() === 'yes') {
                makeMember();
            } else {
                printCard();
            }
        })
    });
};

function printCard() {
    fs.writeFile('test.html', generateTeam(newMember), (err) => {
        err ? console.log(err) : console.log('Success')
    })
};

test();
