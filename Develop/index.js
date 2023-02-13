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
    "Which license did you use for the project?",
    "Provide relevant badges.",
    "List or describe features.",
    "Explain how to contribute.",
    "Provide any relevant tests that can be performed.",
    // Additional
    "What is your GitHub username?",
    "What is your email?"
];

const badgeList = [
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT",
    "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
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
                message: questions[3],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usage',
            },
            // Add credits
            // Add license
            {
                type: 'list',
                message: questions[6],
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
            // Add badges
            // Add features
            {
                type: 'input',
                message: questions[9],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'tests',
            },
            // Add username
            // Add email
        ])
        .then((response) =>
            // Determine License badge
            // Append to file
            fs.writeFile('README.md',
                `# ${response.title}\n` +
                `${badgeList[response.license]}\n` +
                `## Description\n${response.description}\n` +
                `## Installation\n${response.installation}\n` +
                `## Usage\n${response.usage}\n` +
                `## License\n${response.license.name}\n` +
                `## Contributing\n${response.contributing}\n` +
                `## Tests\n${response.tests}\n`,
                (err) => err ? console.error(err) : console.log('Noted'))
        );
}

writeToFile();

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
