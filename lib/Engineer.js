// import Employee class
const Employee = require("./Employee");

// create Engineer which extends Employee
class Engineer extends Employee {
  // create a constructor function that takes in name, id, email, github
  // use super to pass name, id, email, and set them as properties of employee such as this.github = github
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

// export Engineer
module.exports = Engineer;
