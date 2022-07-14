const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let id = 1;



generateManager = (managerInfo) => {
    const {name, email, officeNumber} = managerInfo;
    const manager = new Manager(name, id, email, officeNumber);
    id++;
    return `
    <div>
        <div>
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <div>
            <p>
                ${manager.getId()} <br />
                ${manager.getEmail()} <br />
                Office number: ${manager.officeNumber}
            </p>
        </div>
    </div>
    `
}

generateMembers = members => {
    return `
    <div>
        ${members
        .filter(({member}) => member === 'Engineer')
        .map(({name, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            id++;
            return `
            <div>
                <div>
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}</h3>
                </div>
                <div>
                    <p>
                        ${engineer.getId()} <br />
                        ${engineer.getEmail()} <br />
                        ${engineer.getGithub()}
                    </p>
                </div>
            </div?
            `
        })}

        ${members
            .filter(({member}) => member === 'Intern')
            .map(({name, email, school}) => {
                const intern = new Intern(name, id, email, school);
                id++;
                return `
                <div>
                    <div>
                        <h2>${intern.getName()}</h2>
                        <h3>${intern.getRole()}</h3>
                    </div>
                    <div>
                        <p>
                            ${intern.getId()} \n
                            ${intern.getEmail()} \n
                            ${intern.getSchool()}
                        </p>
                    </div>
                </div>
                `
            })}

    </div>
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
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <main>
            ${generateManager(managerInfo)}
            ${generateMembers(members)}
        </main>
    </body>
    `
}