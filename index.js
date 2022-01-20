const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const questions = [
    {
        type: 'list',
        message: 'Are you an employee?',
        name: 'employed',
        choices: ['Yes','No'],
    }
];

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'list',
        message: 'What is your position?',
        name: 'position',
        choices: ['Manager','Engineer','Intern']
    }
];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school'
    }
];

// const printCard = inquirer
//     .prompt(questions)
//     .then((response) => {
//         if(response.employed.toLowerCase() !== 'yes') {
//            return;
//         } else {
//             //WRITE PROMPT FOR EMPLOYEE INFORMATION
//             //WRITE FUNCTION TO PRINT ID CARD
//             inquirer
//                 .prompt(employeeQuestions)
//                 .then((employeeResponse) => {
//                     if(employeeResponse.position.toLowerCase() === 'manager') {
//                         inquirer
//                             .prompt(managerQuestions)
//                             .then((manangerResponse) => {
//                                 return manangerResponse;
//                             });
//                     } else if(employeeResponse.position.toLowerCase() === 'engineer') {
//                         inquirer
//                             .prompt(engineerQuestions)
//                             .then((engineerResponse) => {
//                                 return engineerResponse;
//                             });
//                     } else if(employeeResponse.position.toLowerCase() === 'intern') {
//                         inquirer
//                             .prompt(internQuestions)
//                             .then((internQuestions) => {
//                                 return internQuestions;
//                             });
//                     }
//                 })
//                 fs.writeFile('test', manangerResponse, (err) => {
//                     err ? console.log(err) : console.log('success')
//                 })
//         }
//     })

    const printCard = inquirer
    .prompt(questions)