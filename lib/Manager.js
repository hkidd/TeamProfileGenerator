// import Employee class
const Employee = require("./Employee");
// create Manager which extends Employee
class Manager extends Employee {
    //create a constructor function that takes in name, id, email, officeNumber
    //use super method to pass name, id, email
    // and sets them as properties of employee 
    //such as this.officeNumber= officeNumber
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){

    }

    getOfficeNumber(){

    }

}

// export Manager
module.exports = Manager;