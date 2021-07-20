// import Employee class
const Employee = require("./Employee");
// create Manager which extends Employee
class Manager extends Employee {
    //create a constructor function that takes in name, id, email, officeNumber 
    // use super method to pass name, id, email, and sets them as properties of employee such as this.officeNumber = officeNumber
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return 'Manager';
    }
};

// export Manager
module.exports = Manager;