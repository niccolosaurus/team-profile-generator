//Manager
const createManager = manager => {
    return `
    <div class="col-4 mt-4">

        <div class="card h-100">

            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>

            <div class="card-body">
                <p class="id">ID:${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>   

        </div>

    </div>
    `;
};

//Engineer
const createEngineer = engineer => {
    return `
    <div class="col-4 mt-4">

        <div class="card h-100">

            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>

        </div>

    </div>
    `;
};

//Intern
const createIntern = intern => {
    return `
    <div class="col-4 mt-4">

        <div class="card h-100">

            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>

        </div>

    </div>
    `;
};

//Generate Contents of HTML
generateHTML = data => {

    cardArray = [];

    for(let i=0; i<data.length; i++) {
        let employee = data[i];
        let job = employee.getJob();

        //Manager
        if(job === "Manager") {
            let managerCard = createManager(employee);
            cardArray.push(managerCard);
        };

        //Engineer
        if(job === "Engineer") {
            let engineerCard = createEngineer(employee);
            cardArray.push(engineerCard);
        };

        //Intern
        if(job === "Intern") {
            let internCard = createIntern(employee);
            cardArray.push(internCard);
        };
    };

    let employeeCard = cardArray.join("");
    let createTeamProfile = createTeamProfilePage(employeeCard);
    return createTeamProfile;
};

const createTeamProfilePage = employeeCard => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">    
    <title>Team Profile Generator</title>
</head>
<body>

<header>
    <nav class="navbar" id="navbar">
        <h1 class="navbar-brand text-center w-100 mb-0" id="navbar-text">Team Profile Page</h1>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
                ${employeeCard}
        </div>
    </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="jquery-3.5.1.min.js"></script>
</body>
</html>
    
`;
};

//Export
module.exports = generateHTML;