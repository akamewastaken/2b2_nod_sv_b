const imc = require('./imc')
const inquirer = require('inquirer');


const fs = require('fs');
const { default: chalk } = require('chalk');
function operation() {


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
}



