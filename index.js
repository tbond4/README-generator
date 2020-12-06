const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [ 
    {
        type: "input",
        message:"What is the title of your project?",
        name:"title",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name:"gitHub",
    },
    {
        type: "input",
        message: "What is your Email?",
        name:"email",
    },
    {
        type: "input",
        message: "What is your project description?",
        name:"description",
    },
    {
        type: "input",
        message: "What command is needed to install packages for your project?",
        name:"installation",
    },
    {
        type: "input",
        message:"What are the instructions for using your project?",
        name:"usage",
    },
    {
        type: "input",
        message:"How can a user contribute to your project?",
        name:"contributing",
    },
    {
        type: "input",
        message: "What command should be run to test this project?",
        name:"tests",
    },
    
    {
        type: "list",
        choices: [ "MIT", "GPLv2","Apache" ],
        message: "What is your project liscense?",
        name:"license",
    },
];
//names are already given
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err)=>{ err ? console.log("failed to write file"):console.log("Success!")})
}

// function to initialize program
function init() {
//inquierer.prompt.then => pass respobse object to generatemarkdown
inquirer.prompt(questions).then(data => {
    if(data.license=="MIT"){
        data.license= "MIT  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if(data.license=="GPLv2"){
        data.license="GPLv2 [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }else{
        data.license="Apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
   writeToFile("READMENEW.md", generateMarkdown(data));
})
}

// function call to initialize program
init();
