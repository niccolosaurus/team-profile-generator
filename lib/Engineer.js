//Import Employee Constructor File
const Employee = require("./Employee");

//engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //calling the employee constructor
        super(name, id, email);
        //github username
        this.github = github;
    };

    //override the employee file to the engenieer file
    getRole() {
        return "Engineer";
    };

    //return github
    getGithub() {
        return this.github;
    };
};

//export Engineer
module.exports = Engineer;