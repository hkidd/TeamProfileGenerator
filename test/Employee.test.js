//require Employee
const Employee = require("../lib/Employee");
// create test for employee 
describe('Employee', () => {

    // returns an "employee" based on definition
    test('should create a new employee object with a name, id, and email', () => {
        const employee = new Employee('Harry', 1, 'harry@email.com');

        expect(employee.name).toEqual('Harry');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('harry@email.com');
    })

    // test to see if type of new employee is an object
    test('should return an object', () => {
        const employee = new Employee();

        expect(typeof employee).toEqual("object");
    })

    // test if constructor can set name
    test('should allow the constructor to set the employee name', () => {
        const name = 'Harry';
        const employee = new Employee(name);

        expect(employee.name).toEqual(name);
    })

    // test if constructor can set id
    test('should allow the constructor to set the employee id', () => {
        const id = 1;
        const employee = new Employee('Harry', id);

        expect(employee.id).toEqual(id);
    })

    // test if constructor can set email
    test('should allow the constructor to set the employee email', () => {
        const email = 'harry@email.com';
        const employee = new Employee('Harry', 1, email);

        expect(employee.email).toEqual(email);
    })

    //test to see if getName() returns name 
    test('getName() should return the employee name', () => {
        const name = 'Harry';
        const employee = new Employee(name);

        expect(employee.getName()).toEqual(name);
    })

    //test to see if getId() returns name 
    test('getName() should return the employee name', () => {
        const id = 1;
        const employee = new Employee('Harry', id);

        expect(employee.getId()).toEqual(id);
    })

    //test to see if getEmail() returns name 
    test('getName() should return the employee name', () => {
        const email = 'harry@email.com';
        const employee = new Employee('Harry', 1, email);

        expect(employee.getEmail()).toEqual(email);
    })

    //test to see if getRole() returns 'Employee' 
    test('getName() should return the employee name', () => {
        const employee = new Employee('Harry', 1, 'harry@email.com');

        expect(employee.getRole()).toEqual('Employee');
    })

});