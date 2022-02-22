//Import Employee Constructor File
const Employee = require("./Employee");

//manager constructor extends employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calling the employee constructor
        super(name, id, email);
        //officeNumber
        this.officeNumber = officeNumber;
    };

    //override the employee file to the manager file
    getRole() {
        return "Manager";
    };

    //return officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    };
};

//export Manager
module.exports = Manager;