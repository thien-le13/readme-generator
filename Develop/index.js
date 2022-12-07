// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "rawlist",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["Apache", "Boost", "BSD", "Creative Commons", ""]
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
        type: "input",
        name: "contributions",
        message: "If you created an application and would like other developers to contribute it, you can include guidelines for how to do so.",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests for your application here.",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "What is you email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data, process.cwd());
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
