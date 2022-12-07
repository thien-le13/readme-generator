// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === "Apache") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "Boost") {
    return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  } else if (license === "BSD") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (license === "Creative Commons") {
    return "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    return "";
  } else if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Creative Commons") {
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  }
  return `
  ## License
  
  The license under use is ${license}: ${renderLicenseLink(license)}
  
  `;
}

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
  ${renderLicenseSection(data.license)}
  ---
  
  ## Credits
  
  ${data.credits}

  ## How to Contribute
  
  ${data.contributions}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  Feel free to contact me at: ${data.email}.

  There's more of my work at (https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
