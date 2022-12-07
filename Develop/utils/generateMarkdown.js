// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (license === "Apache") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # <${data.title}>

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## License
  
  ${data.license}
  
  ---
  
  ## Credits
  
  ${data.credits}

  ## How to Contribute
  
  ${data.contributions}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  ${data.github}
`;
}

module.exports = generateMarkdown;
