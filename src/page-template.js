const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let id = 1;



generateManager = (managerInfo) => {
    const {name, email, officeNumber} = managerInfo;
    const manager = new Manager(name, id, email, officeNumber);
    id++;
    return `
    <div class="card column is-one-third">
        <div class="card-content has-background-info has-text-light">
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <div class="card-content">
            <p class="content">
                ${manager.getId()} <br />
                Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a> <br />
                Office number: ${manager.officeNumber}
            </p>
        </div>
    </div>
    `
}

generateMembers = members => {
    return `
        ${members
        .filter(({member}) => member === 'Engineer')
        .map(({name, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            id++;
            return `
            <div class="card column is-one-third">
                <div class="card-content has-background-success has-text-light">
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}</h3>
                </div>
                <div class="card-content">
                    <p>
                        ${engineer.getId()} <br />
                        Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a> <br />
                        <a href="${engineer.getGithub()}">Open GitHub Repository</a>
                    </p>
                </div>
            </div>
            `
        })
        .join('')}

        ${members
        .filter(({member}) => member === 'Intern')
        .map(({name, email, school}) => {
            const intern = new Intern(name, id, email, school);
            id++;
            return `
            <div class="card column is-one-third">
                <div class="card-content has-background-warning">
                    <h2>${intern.getName()}</h2>
                    <h3>${intern.getRole()}</h3>
                </div>
                <div class="card-content">
                    <p>
                        ${intern.getId()} <br />
                        Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a> <br />
                        ${intern.getSchool()}
                    </p>
                </div>
            </div>
            `
        })
        .join('')}
    `
}


module.exports = templateData => {
    const {members, ...managerInfo} = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Nickless Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
    </head>

    <body>
        <header class="hero">
            <p class="hero-body has-background-primary has-text-light is-size-1">Nickless Team</p>
        </header>
        <main class = "columns m-2 is-flex is-flex-wrap-wrap is-justify-content-center">
            ${generateManager(managerInfo)}
            ${generateMembers(members)}
        </main>
    </body>
    </html>
    `
}