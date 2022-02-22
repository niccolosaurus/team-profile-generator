//Employee Constructor File
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    //return name
    getName() {
        return this.name;
    };

    //return name
    getId() {
        return this.id;
    };

    //return email
    getEmail() {
        return this.email;
    };

    //return Employee
    getRole() {
        return "Employee";
    };
};

//export Employee
module.exports = Employee;