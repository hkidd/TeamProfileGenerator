///require classes and inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

//package native to node for resolving path
const path = require("path");

//determine current directory and find path to the output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output")
//where to create our output
const outputPath = path.join(OUTPUT_DIR, "team.html");

//require render function from the page template
const render = require("./src/page-template.js");

//use inquirer to determine what kind of employee you will be adding or to exit and build html
//based on the reponse trigger another inquire block
// use answers to create a "new Employee" and add the employee to the 
//teamMembers array
//

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    //write html to output/team.html using function exported from page-template.js
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

      