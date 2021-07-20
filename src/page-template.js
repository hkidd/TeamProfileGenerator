const app = require("../app");
const fs = require("fs");

//create function that organizes information for the team and returns html for each type of team member inside a html template

// initialize role arrays
const managerArray = [];
const internArray = [];
const engineerArray = [];

function arrayMaker(teamArray) {
  for (let i = 0; i < teamArray.length; i++) {
    let member = teamArray[i];
    let role = member.getRole();

    if (role == "Manager") {
      managerArray.push(member);
    } else if (role == "Engineer") {
      engineerArray.push(member);
    } else if (role == "Intern") {
      internArray.push(member);
    }
  }
  managerCards();
}

// initialize card arrays
const managerCardArray = [];
const internCardArray = [];
const engineerCardArray = [];

// create manager cards
function managerCards() {
  managerArray.forEach((manager) => {
    managerCardArray.push(`<div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <div class="card-body text-dark">
        <h5 class="card-title">${manager.name}</h5>
        <p class="card-text">${manager.id}<br>${manager.email}<br>${manager.officeNumber}</p>
        </div>
        </div>`);
  });
  engineerCards();
}

// create engineer cards
function engineerCards() {
  engineerArray.forEach((engineer) => {
    engineerCardArray.push(`<div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Engineer</div>
            <div class="card-body text-dark">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">${engineer.id}<br>${engineer.email}<br>${engineer.github}</p>
            </div>
            </div>`);
  });
  internCards();
}

// create intern cards
function internCards() {
  internArray.forEach((intern) => {
    internCardArray.push(`<div class="card border-dark mb-3" style="max-width: 18rem;">
                <div class="card-header">Intern</div>
                <div class="card-body text-dark">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">${intern.id}<br>${intern.email}<br>${intern.school}</p>
                </div>
                </div>`);
  });
  generateHTML();
}

// HTML file template
function generateHTML() {
  let newHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Our Team</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        ${managerCardArray.join("")}
        ${internCardArray.join("")}
        ${engineerCardArray.join("")}
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
  </html>`;


//  Create new HTML file using the above template
  fs.writeFile("team.html", newHTML, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

module.exports = generateHTML;
module.exports = arrayMaker;