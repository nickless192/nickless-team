const fs = require('fs');
const inquirer = require('inquirer');

let id = 0;

const promptManager = () => {
    return inquirer.prompt(
        [
            {
                type: 'text',
                name: 'name',
                message: 'What is your name?',
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Name cannot be left blank. Please enter a name!");
                        return false;
                    }
                }
            },{
                type: 'text',
                name: 'email',
                message: 'Please enter your email address',
                validate: (emailInput) => {
                    if (emailInput && emailInput.indexOf('@') !== -1) {
                        return true;
                    } else {
                        console.log(' Please enter a valid email address!');
                        return false;
                    }
                }
            }, {
                type: 'list',
                name: 'whoNext',
                choices: ['Engineer', 'Intern'],
        
            }
        ]
    )
};

const promptTeammates = teamData => {
    if (!teamData.members) {
        teamData.members = [];
    }
    console.log(`
    ================
    Add a New Member
    ================
    `);

    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Name cannot be left blank. Please enter a name!");
                    return false;
                }
            }
        },{
            type: 'text',
            name: 'email',
            message: 'Please enter your email address',
            validate: (emailInput) => {
                if (emailInput && emailInput.indexOf('@') !== -1) {
                    return true;
                } else {
                    console.log(' Please enter a valid email address!');
                    return false;
                }
            }
        },{
            type: 'text',
            name: 'github',
            message: 'Please enter your Github user name',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(' Please enter a valid Github user name!');
                    return false;
                }
            }
        }
    
    ]);
} 



// inquirer.prompt(questions)
// .then((data)=> {
//     console.log(data);

//     if (whoNext === 'Engineer') {
//         // prompt for engineer
//     } else {
//         // prompt for intern
//     }

// });

promptManager();