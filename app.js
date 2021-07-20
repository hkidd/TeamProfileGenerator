// Require classes and inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Package native to node for resolving path
const path = require("path");

// Determine current directory and find path to the output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output")
// HTML output directory
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Require render function from the page template
// const render = require("./src/page-template.js");

// Use inquirer to determine what kind of employee you will be adding or to exit and build html
// Based on the reponse trigger another inquire block
// Use answers to create a "new Employee" and add the employee to the teamMembers array

const managerQuestions = [
  {
  type: 'input',
  message: 'What is the team manager\'s name?',
  name: 'teamManagerName',
  },
  {
  type: 'input',
  message: 'Team Manager Employee ID?',
  name: 'teamManagerID',
  },
  {
  type: 'input',
  message: 'Office number?',
  name: 'officeNumber',
  },
  {
  type: 'list',
  message: 'Add another employee?',
  name: 'newEmployee',
  choices: ['Engineer', 'Intern', 'Finish Building my Team'],
  },
];

inquirer.prompt(managerQuestions)
  .then((responses) => {
    console.log(responses);

    let managerName = responses.teamManagerName;
    let managerID = responses.teamManagerID;
    let officeNumber = responses.officeNumber;
    let newEmployee = responses.newEmployee;

    const teamManager = new Manager(managerName, managerID, officeNumber);
    managerArray.push(teamManager);

    newEmployee();
});

const engineerQuestions = [
  {
  type: 'input',
  message: 'What is the name of the Engineer?',
  name: 'engineerName',
  },
  {
  type: 'input',
  message: 'Engineer ID?',
  name: 'engineerID',
  },
  {
  type: 'input',
  message: 'Engineer\'s email?',
  name: 'engineerEmail',
  },
  {
  type: 'input',
  message: 'Engineers GitHub username?',
  name: 'engineerGitHub',
  },
  {
  type: 'list',
  message: 'Add another employee?',
  name: 'newEmployee',
  choices: ['Engineer', 'Intern', 'Finish Building my Team'],
  },
];

const internQuestions = [
  {
  type: 'input',
  message: 'What is the name of the intern?',
  name: 'internName',
  },
  {
  type: 'input',
  message: 'Intern ID?',
  name: 'internID',
  },
  {
  type: 'input',
  message: 'Intern\'s email?',
  name: 'internEmail',
  },
  {
  type: 'input',
  message: 'Intern\'s school?',
  name: 'internSchool',
  },
  {
  type: 'list',
  message: 'Add another employee?',
  name: 'newEmployee',
  choices: ['Engineer', 'Intern', 'Finish Building my Team'],
  },
];

function newEmployee() {
  if (newEmployee == 'Engineer') {
    inquirer.prompt(engineerQuestions)
      .then((responses) => {
        console.log(responses);

        let engineerName = responses.engineerName;
        let engineerID = responses.engineerID;
        let engineerEmail = responses.engineerEmail;
        let engineerGitHub = responses.engineerGitHub;
        let newEmployee = responses.newEmployee;

        const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
        engineerArray.push(engineer);

        newEmployee(newEmployee);        
      });
    } else if (newEmployee == 'Intern') {
      inquirer.prompt(internQuestions)
      .then((responses) => {
        console.log(responses);

        let internName = responses.engineerName;
        let internID = responses.engineerID;
        let internEmail = responses.engineerEmail;
        let internSchool = responses.internSchool;
        let newEmployee = responses.newEmployee;

        const engineer = new Engineer(internName, internID, internEmail, internSchool);
        engineerArray.push(engineer);

        newEmployee(newEmployee);        
      });
    }
  };

const teamMembersArray = [];
const managerArray = [];
const internArray = [];
const engineerArray = [];

    

    // function buildTeam() {
    //   // Create the output directory if the output path doesn't exist
    //   if (!fs.existsSync(OUTPUT_DIR)) {
    //     fs.mkdirSync(OUTPUT_DIR)
    //   }
    //   // write html to output/team.html using function exported from page-template.js
    //   fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    // }

// Function to initialize app
function init() {}

// Function call to initialize app
init();

      