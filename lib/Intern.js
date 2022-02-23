//Import Employee Constructor File
const Employee = require("./Employee");

//intern constructor extends employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        //calling the employee constructor
        super(name, id, email);
        //school name
        this.school = school;
    };

    //override the employee file to the intern file
    getJob() {
        return "Intern";
    };

    //return school
    getSchool() {
        return this.school;
    };
};

//export Intern
module.exports = Intern;