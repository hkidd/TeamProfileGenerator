// import Employee class
const Employee = require("./Employee");
// create Engineer which extends Employee
class Engineer extends Employee {
    //create a constructor function that takes in name, id, email, github
    //use super metheod to pass name, id, email
    // and sets them as properties of employee 
    //such as this.github= github
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }
    
}

// export Engineer
module.exports = Engineer;