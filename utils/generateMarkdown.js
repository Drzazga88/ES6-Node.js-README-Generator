// function to generate markdown for README
function generateMarkdown(answers) {
  const githubLink = `https://github.com/${answers.username}`;
  const questionsSection = `
## Questions
If you have any questions or concerns about this application, please contact me via email at ${answers.email}. You can also check out my GitHub profile, [${answers.username}](${githubLink}).`;
  
  let licenseBadgeURL = "";
  let licenseNotice = "";

  // Check the user's license selection and set the badge and notice accordingly
  if (answers.license === "MIT") {
    licenseBadgeURL = "https://img.shields.io/badge/License-MIT-yellow.svg";
    licenseNotice = "This project is licensed under the MIT license.";
  } else if (answers.license === "GPL") {
    licenseBadgeURL = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    licenseNotice = "This project is licensed under the GPL license.";
  } else if (answers.license === "BSD") {
    licenseBadgeURL = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
    licenseNotice = "This project is licensed under the BSD 3-Clause license.";
  } else {
    licenseNotice = "This project is not licensed.";
  }

  return `# ${answers.title}

![License](${licenseBadgeURL})

## Description

${answers.description ? answers.description : "Description"}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation ? answers.installation : "Installation instructions"}

## Usage

${answers.usage ? answers.usage : "Usage information"}

## License

${answers.license ? `This application is covered under the ${answers.license} license.` : "License information"}

## Contributing

${answers.contributing ? answers.contributing : "Contribution guidelines"}

## Tests

${answers.tests ? answers.tests : "Testing instructions"}

${questionsSection}
`;
}

module.exports = generateMarkdown;
