// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Give a description of the project.",
    "Choose relevant sections for your table of contents.",
    "Provide steps for installation.",
    "Provide steps for usage.",
    "Provide credits.",
    "What license did you use for the project?",
    "Provide relevant badges.",
    "List or describe features.",
    "Explain how to contribute.",
    "Provide any relevant tests that can be performed.",
    // Additional
    "What is your GitHub username?",
    "What is your email?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
        ])
        .then((response) =>
            fs.writeFile('README.txt',
                `# ${response.title}\n` +
                ``,
                (err) => err ? console.error(err) : console.log('Noted'))
        );
}

writeToFile();

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
