//Require Intern  
const Intern = require("../lib/Intern");
//create test on Intern class
describe('Intern', () => {

    // returns an "intern" based on definition
    test('should create a new intern object with a name, id, email, and school', () => {
        const intern = new Intern('Harry', 1, 'harry@email.com', 'UT Austin');

        expect(intern.name).toEqual('Harry');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('harry@email.com');
        expect(intern.school).toEqual('UT Austin');
    })

    // test if constructor can set school
    test('should allow the constructor to set the intern school', () => {
        const school = 'hkidd';
        const intern = new Intern('Harry', 1, 'harry@email.com', school);

        expect(intern.school).toEqual(school);
    })

    //test to see if getSchool() returns school 
    test('getSchool() should return the intern school', () => {
        const school = 'hkidd';
        const intern = new Intern('Harry', 1, 'harry@email.com', school);

        expect(intern.getSchool()).toEqual(school);
    })

    //test to see if getRole() returns 'Intern' 
    test('getRole() should return intern', () => {
        const intern = new Intern('Harry', 1, 'harry@email.com', 'UT Austin');

        expect(intern.getRole()).toEqual('Intern');
    })

});