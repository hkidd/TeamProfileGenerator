// create Employee class
class Employee {
  //create a constructor function that takes in name, id, email, and sets them as properties of employee such as this.name = name
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

// export Employee
module.exports = Employee;
