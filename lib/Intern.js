// import Employee class
const Employee = require("./Employee");

// create Intern which extends Employee
class Intern extends Employee {
    //create a constructor function that takes in name, id, email, school use super method to pass name, id, email and set them as properties of employee such as this.school = school
    constructor(school) {
        super(name, id, email);
        
        this.school = school;
    }

    getRole(){

    }

    getSchool(){

    }
    
    getRole(){
        return console.log('Intern');
    }
}

// export Intern
module.exports = Intern;