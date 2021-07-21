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
    managerCardArray.push(`<div class="card d-flex flex-wrap col-3 mb-3" style="max-width: 18rem">
    <div style="text-align: center;" class="card-header cardHead"><h3>Manager</h3></div>
    <div class="card-body text-dark cardBod">
        <h5 class="card-title">Name: ${manager.name}</h5>
        <p class="card-text">ID: ${manager.id}<br>E-mail: ${manager.email}<br>Office Number: ${manager.officeNumber}</p>
        </div>
        </div>`);
  });
  engineerCards();
}

// create engineer cards
function engineerCards() {
  engineerArray.forEach((engineer) => {
    engineerCardArray.push(`<div class="card d-flex flex-wrap col-3 mb-3" style="max-width: 18rem">
    <div style="text-align: center;" class="card-header cardHead"><h3>Engineer</h3></div>
    <div class="card-body text-dark cardBod">
            <h5 class="card-title">Name: ${engineer.name}</h5>
            <p class="card-text">ID: ${engineer.id}<br>E-mail: ${engineer.email}<br>GitHub: ${engineer.github}</p>
            </div>
            </div>`);
  });
  internCards();
}

// create intern cards
function internCards() {
  internArray.forEach((intern) => {
    internCardArray.push(`<div class="card d-flex flex-wrap col-3 mb-3" style="max-width: 18rem">
    <div style="text-align: center;" class="card-header cardHead"><h3>Intern</h3></div>
    <div class="card-body text-dark cardBod">
                <h5 class="card-title">Name: ${intern.name}</h5>
                <p class="card-text">ID: ${intern.id}<br>E-mail: ${intern.email}<br>School: ${intern.school}</p>
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
    <link rel="stylesheet" href="./style.css" type="text/css">
    <title>Our Team</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <h1 style="text-align: center;" class="mainHeader">Our Team</h1>
    </div>
      <div class="container d-flex justify-content-center flex-wrap">
          ${managerCardArray.join("")}
          ${engineerCardArray.join("")}
          ${internCardArray.join("")}
      </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
  </html>`;

  //  Create new HTML file using the above template
  fs.writeFile("./output/team.html", newHTML, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

module.exports = generateHTML;
module.exports = arrayMaker;
