// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'n/a'){
    return ''
  }
  return '![license badge](https://img.shields.io/badge/license-'+`${license}`+'-yellowgreen.svg)'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'n/a'){
    return ''
  }
  return '[license](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'n/a'){
    return ''
  }
  return 
}
  // ${renderLicenseBadge(data.license)}
  // [usage](#usage)
  // ${renderLicenseLink(data.license)}
  // ${renderLicenseSection(data.license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # Table of Contents
  - [description](#description)
  - [usage](#usage)
  - [Installation](#installation)
  - [license](#license)
  - [contribution](#contribution)
  - [tests](#tests)
  - [Questions/Contact Me](#Questions)
  # Description
  ${data.description}
  # Usage
  ${data.usage}
  # Installation
  ${data.installation}
  # License
  ${data.license}
  # Contribution Guidelines
  ${data.contribution}
  # Tests
  ${data.tests}
  # Questions/Contact Me
  ${data.username}
  ${data.repo}
  ${data.email}
`;
}

module.exports = generateMarkdown;
