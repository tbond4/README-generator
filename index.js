const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = ["What is the titel of your project?", "What is your project description?","What are the project installation instructions?",
"What are the usage instructions?", "What are the contribution guidlines?","What are the test instructions?","What is your GitHub username?","What is your Email?"];
//names are already given

inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name:"title",
    },
    {
        type: "input",
        message: questions[1],
        name:"title",
    },
    {
        type: "input",
        message: questions[2],
        name:"title",
    },
    {
        type: "input",
        message: questions[3],
        name:"title",
    },
    {
        type: "input",
        message: questions[4],
        name:"title",
    },
    {
        type: "input",
        message: questions[5],
        name:"title",
    },
    {
        type: "input",
        message: questions[6],
        name:"title",
    },
])
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err)=>{ err ? console.log("failed to write file"):console.log("Success!")})
}

// function to initialize program
function init() {
//inquierer.prompt.then => pass respobse object to generatemarkdown
inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name:"title",
    },
]).then(data => {
   writeToFile("READMENEW.md", generateMarkdown(data));
})
}

// function call to initialize program
init();
