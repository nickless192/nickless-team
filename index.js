const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const generateSite = require('./utils/generate-site');

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
            },{
                type: 'text',
                name: 'officeNumber',
                message: 'What is your office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
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
            type: 'list',
            name: 'member',
            message: 'Who would you like to add to your team?',
            choices: ['Engineer', 'Intern'],
        },
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
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(' Please enter a valid Github user name!');
                    return false;
                }
            },
            when: ({member}) => {
                if (member === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },{
            type: 'text',
            name: 'school',
            message: 'What school do/did you attend?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('School name cannot be empty. Please enter your school name!');
                    return false;
                }
            },
            when: ({member}) => {
                if (member === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },{
            type: 'confirm',
            name: 'addNewMember',
            message: 'Would you like to add another teammate?',
            default: false
        }
    
    ])
    .then(teammateData => {
        teamData.members.push(teammateData);
        if(teammateData.addNewMember) {
            return promptTeammates(teamData);
        } else {
            return teamData;
        }
    });
} 

promptManager()
.then(promptTeammates)
.then(data => {
    //console.log(data);
    return data;
})
.then(data => {
    return generatePage(data);
})
.then(htmlData => {
    return generateSite(htmlData);
});