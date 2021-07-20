//require Engineer
const Engineer = require("../lib/Engineer");
//create test on Engineer class
describe('Engineer', () => {

    // returns an "engineer" based on definition
    test('should create a new engineer object with a name, id, email, and github username', () => {
        const engineer = new Engineer('Harry', 1, 'harry@email.com', 'hkidd');

        expect(engineer.name).toEqual('Harry');
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('harry@email.com');
        expect(engineer.github).toEqual('hkidd');
    })

    // test if constructor can set github
    test('should allow the constructor to set the engineer github', () => {
        const github = 'hkidd';
        const engineer = new Engineer('Harry', 1, 'harry@email.com', github);

        expect(engineer.github).toEqual(github);
    })

    //test to see if getGithub() returns github 
    test('getGithub() should return the engineer github', () => {
        const github = 'hkidd';
        const engineer = new Engineer('Harry', 1, 'harry@email.com', github);

        expect(engineer.getGithub()).toEqual(github);
    })

    //test to see if getRole() returns 'Engineer' 
    test('getRole() should return engineer', () => {
        const engineer = new Engineer('Harry', 1, 'harry@email.com', 'hkidd');

        expect(engineer.getRole()).toEqual('Engineer');
    })

});