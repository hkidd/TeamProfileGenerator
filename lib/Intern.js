// import Employee class
const Employee = require("./Employee");

// create Intern which extends Employee
class Intern extends Employee {
    //create a constructor function that takes in name, id, email, school
    //use super metheod to pass name, id, email
    // and sets them as properties of employee 
    //such as this.school= school
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }

    getRole(){

    }

    getSchool(){

    }
    
}

// export Intern
module.exports = Intern;