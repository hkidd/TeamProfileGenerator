// Require classes and inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Require functions from the page template
const arrayMaker = require("./src/page-template.js");

// Use inquirer to determine what kind of employee you will be adding or to exit and build html
// Based on the reponse trigger another inquire block
// Use answers to create a "new Employee" and add the employee to the teamMembers array

const teamArray = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "teamManagerName",
  },
  {
    type: "input",
    message: "Team Manager Employee ID?",
    name: "teamManagerID",
  },
  {
    type: "input",
    message: "Team Manager email?",
    name: "teamManagerEmail",
  },
  {
    type: "input",
    message: "Office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Add another employee?",
    name: "newEmployee",
    choices: ["Engineer", "Intern", "Finish Building my Team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the name of the Engineer?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Engineer ID?",
    name: "engineerID",
  },
  {
    type: "input",
    message: "Engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Engineers GitHub username?",
    name: "engineerGitHub",
  },
  {
    type: "list",
    message: "Add another employee?",
    name: "newEmployee",
    choices: ["Engineer", "Intern", "Finish Building my Team"],
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the name of the intern?",
    name: "internName",
  },
  {
    type: "input",
    message: "Intern ID?",
    name: "internID",
  },
  {
    type: "input",
    message: "Intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Intern's school?",
    name: "internSchool",
  },
  {
    type: "list",
    message: "Add another employee?",
    name: "newEmployee",
    choices: ["Engineer", "Intern", "Finish Building my Team"],
  },
];

function startQuestions() {
  // Start with manager questions
  inquirer.prompt(managerQuestions).then((responses) => {
    console.log(responses);

    let managerName = responses.teamManagerName;
    let managerID = responses.teamManagerID;
    let teamManagerEmail = responses.teamManagerEmail;
    let officeNumber = responses.officeNumber;
    let newEmployee = responses.newEmployee;

    const teamManager = new Manager(
      managerName,
      managerID,
      teamManagerEmail,
      officeNumber
    );
    teamArray.push(teamManager);

    makeEmployee(newEmployee);

    // For new employees, either start engineer or intern questions
    function makeEmployee(newEmployee) {
      if (newEmployee == "Engineer") {
        inquirer.prompt(engineerQuestions).then((responses) => {
          console.log(responses);

          let engineerName = responses.engineerName;
          let engineerID = responses.engineerID;
          let engineerEmail = responses.engineerEmail;
          let engineerGitHub = responses.engineerGitHub;
          let newEmployee = responses.newEmployee;

          const engineer = new Engineer(
            engineerName,
            engineerID,
            engineerEmail,
            engineerGitHub
          );
          teamArray.push(engineer);

          makeEmployee(newEmployee);
        });
      } else if (newEmployee == "Intern") {
        inquirer.prompt(internQuestions).then((responses) => {
          console.log(responses);

          let internName = responses.internName;
          let internID = responses.internID;
          let internEmail = responses.internEmail;
          let internSchool = responses.internSchool;
          let newEmployee = responses.newEmployee;

          const intern = new Intern(
            internName,
            internID,
            internEmail,
            internSchool
          );
          teamArray.push(intern);

          makeEmployee(newEmployee);
        });
        // If no more employees, start HTML generation
      } else if (newEmployee == "Finish Building my Team") {
        console.log(teamArray);
        arrayMaker(teamArray);
      }
    }
  });
}

// Function to initialize app
startQuestions();

module.exports = teamArray;