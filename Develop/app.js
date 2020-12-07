const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// Step 1 - Inquirer input
const name = 'Jason Chang';
const email = 'jason@gmail.com';
const officeNumber = '001';
const id = 'id_1'

inquirer
  .prompt([
    {
      name: 'Role',
      message: 'What is your role?',
      default: 'Engineer',
    },
    {
      name: 'Name',
      message: 'What is your name',
      default: 'Peter Black',
    },
    {
        name: 'Email',
        message: 'What is your email address',
        default: 'abc@gmail.com',
    },
    {
        name: 'Id',
        message: 'What is your id number',
        default: '001',
    },


  ])
  .then(answers => {
    console.info('Answers:', answers);
  });



//Step 2 - create Objects by Class
var manager_1 = new Manager(name, id, email, officeNumber);
manager_1.getRole();
manager_1.getRole();

// Step 3 - call render
// const output = render([manager_1, engineer_1, engineer_2,.....])


// Step 4 -  Generate HTML
// 1.output path => OUTPUT_DIR 
// 2. output file name => outputPath








// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
