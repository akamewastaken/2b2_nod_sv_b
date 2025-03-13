const imc = require('./amc')
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type:'list'
        name:'altura'
        message:'qual é sua altura em cm?';
    };
    {
        type:'list'
        name:'peso'
        message:'qual é seu peso em kg?';
    };
  ] 
  )
  .then(answers) => 
    console.log(chalk.bold('resposta:', answers))



