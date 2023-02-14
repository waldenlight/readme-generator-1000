// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Give a description of the project.",
    "Provide steps for installation.",
    "Provide steps for usage.",
    "Provide credits.",
    "Which license did you use for the project?",
    "Provide relevant badges.",
    "List or describe features.",
    "Explain how to contribute.",
    "Provide any relevant tests that can be performed.",
    // Additional
    "Give instructions as to how other developers can ask you questions about the project.",
    "What is your GitHub username?",
    "What is your email?"
];

const badgeList = [
    "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
    "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)",
    "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)",
]

const licenseList = [
    "Apache 2.0",
    "CC0-1.0",
    "GPL v3",
    "MIT",
    "Open Font-1.1",
    "Zlib",
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.registerPrompt('list-input', require('inquirer-list-input'));
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            // Add table of contents
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'credits',
            },
            {
                type: 'list',
                message: questions[5],
                name: 'license',
                choices: [
                    {
                        name: 'Apache license 2.0',
                        value: 0,
                    },
                    {
                        name: 'Creative Commons Zero v1.0 Universal',
                        value: 1,
                    },
                    {
                        name: 'GNU Lesser General Public License v3.0',
                        value: 2,
                    },
                    {
                        name: 'MIT',
                        value: 3,
                    },
                    {
                        name: 'SIL Open Font License 1.1',
                        value: 4,
                    },
                    {
                        name: 'zLib License',
                        value: 5,
                    },
                ],
            },
            {
                type: 'input',
                message: questions[6],
                name: 'badges',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'features',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[9],
                name: 'tests',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'questions',
            },
            {
                type: 'input',
                message: questions[11],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[12],
                name: 'email',
            }
        ])
        .then((response) =>
            fs.writeFile('README.md',
                `# ${response.title}\n` +
                `${badgeList[response.license]}\n` +
                `## Description\n${response.description}\n` +
                `## Table of Contents` +
                `\n[Installation](#installation)\n` +
                `\n[Usage](#usage)\n` +
                `\n[Credits](#credits)\n` +
                `\n[License](#license)\n` +
                `\n[Badges](#badges)\n` +
                `\n[Features](#features)\n` +
                `\n[Contributing](#contributing)\n` +
                `\n[Tests](#tests)\n` +
                `\n[Questions](#questions)\n` +
                `## Installation\n${response.installation}\n` +
                `## Usage\n${response.usage}\n` +
                `## Credits\n${response.credits}\n` +
                `## License\n${licenseList[response.license]}\n` +
                `## Badges\n${response.badges}\n` +
                `## Features\n${response.features}\n` +
                `## Contributing\n${response.contributing}\n` +
                `## Tests\n${response.tests}\n` +
                `## Questions\n${response.questions}\n` +
                `\nGitHub: [${response.username}](https://github.com/${response.username})\n` +
                `\nEmail: ${response.email}`,
                (err) => err ? console.error(err) : console.log('Noted'))
        );
}

// TODO: Create a function to initialize app
function init() {
    fs.unlink("./readme.md", err => { })
}

// Function call to initialize app
init();
writeToFile();