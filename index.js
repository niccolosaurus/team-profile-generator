//Node Modules
const fs = require("fs");
const inquirer = require("inquirer");
//Generate the HTML
const generateHTML = require("./src/generatedHTML");
//Team Profile JS
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//Employee Array
const employeeArray = [];

//Start with generating the Manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Who is the team's Manager"
        },

        {
            type: "input",
            name: "id",
            message: "Enter the Manager's ID."
        },

        {
            type: "input",
            name: "email",
            message: "Enter the Manager's Email."
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Enter the Manager's office number",
        }
    ])

    .then(managerInputs => {
        const {name, id, email, officeNumber} = managerInputs;
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager);
    })
};

const addEmployee = () => {
    console.log("Adding Employees to the Team");

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select and Employee's job type.",
            choices: ["Engineer", "Intern"]
        },

        {
            type: "input",
            name: "name",
            message: "Enter the Employee's name."
        },

        {
            type: "input",
            name: "id",
            message: "Enter the Employee's ID.",
        },

        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email."
        },

        {
            type: "input",
            name: "github",
            message: "Enter the Employee's GitHub Username."
        },

        {
            type: "input",
            name: "school",
            message: "Enter the Employee's School."
        },

        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add another team member?",
            default: false
        }
    ])

    .then(employeeInfo => {
        //Information on Employees
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeInfo;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        employeeArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(employeeArray);
        } else {
            return employeeArray;
        }
    })
};

//Function: Generate HTML 
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        //if an error occures console log err
        if(err) {
            console.log(err);
            return;
        //When created
        } else {
            console.log("Your Team Profile has been created.")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(employeeArray => {
        return generateHTML(employeeArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })
