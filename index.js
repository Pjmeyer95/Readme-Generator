const fs = require('fs');

const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'which license are you using for your project?',
    choices: ["MIT", "Apache 2.0", "Boost", "IBM"]
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your project used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'who were the contributors for this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'what are the instructions for testing?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
  }
  // Add more questions as needed
];
function generatelicensebadge(license) {
    if (license === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === "Apache 2.0"){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === "Boost"){
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (license === "IBM"){
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
}
inquirer.prompt(questions)
  .then((answers) => {
    const readmeText = `
# ${answers.title}
## License
${generatelicensebadge(answers.license)}
## Description
    ${answers.description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    ${answers.installation}

## Usage
    ${answers.usage}

## Contributing
    ${answers.contributing}

## Tests
    ${answers.tests}

 ## Questions
    ${answers.github}
    ${answers.email}
    `;

    // Write the text to a file
    fs.writeFile('README.md', readmeText, (err) => {
      if (err) throw err;
      console.log('README.md file has been created!');
    });
  });
  // Write the text to a file
 
  