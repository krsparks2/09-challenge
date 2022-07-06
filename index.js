// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const util = require('util');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'GitHub Username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your GitHub Repo?",
        name: 'repo',
        default: 'GitHub Repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub Repo is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name/title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe your project",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid description is required.");
            }
            return true;
        }
    },    
    {
        type: 'list',
        message: "If needed describe the steps required to install your project for the Installation section.",
        name: 'license',
        choices: ['MIT', 'GNU_GPLv3', 'Mozilla_Public_License_2.0', 'Apache', 'n/a']
    },  
    {
        type: 'input',
        message: "Describe how to use your project.",
        name: 'usage'
    },  
    {
        type: 'input',
        message: "Installation instructions",
        name: 'installation'
    },  
    {
        type: 'input',
        message: "Contribution Guidelines",
        name: 'contribution'
    }, 
    {
        type: 'input',
        message: "Are there any Tests",
        name: 'tests'
    }, 
    {
        type: 'input',
        message: "What is your email address",
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('NEWREADME.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
