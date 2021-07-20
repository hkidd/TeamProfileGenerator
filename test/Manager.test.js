//require Manager 
const Manager = require("../lib/Manager");
//create test on manager class
describe('Manager', () => {

    // returns an "manager" based on definition
    test('should create a new manager object with a name, id, email, and office number', () => {
        const manager = new Manager('Harry', 1, 'harry@email.com', 999);

        expect(manager.name).toEqual('Harry');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('harry@email.com');
        expect(manager.officeNumber).toEqual(999);
    })

    // test if constructor can set office number
    test('should allow the constructor to set the managers office number', () => {
        const officeNumber = 999;
        const manager = new Manager('Harry', 1, 'harry@email.com', officeNumber);

        expect(manager.officeNumber).toEqual(officeNumber);
    })

    //test to see if getOfficeNumber() returns office number 
    test('getOfficeNumber() should return the managers office number', () => {
        const officeNumber = 999;
        const manager = new Manager('Harry', 1, 'harry@email.com', officeNumber);

        expect(manager.getOfficeNumber()).toEqual(officeNumber);
    })

    //test to see if getRole() returns 'Manager' 
    test('getRole() should return manager', () => {
        const manager = new Manager('Harry', 1, 'harry@email.com', 999);

        expect(manager.getRole()).toEqual('Manager');
    })

});