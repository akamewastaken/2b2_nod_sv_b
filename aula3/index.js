const inquirer = require('inquirer');
const chalk = require('chalk');
const imc = require('./imc');

async function main() 
  const respostas = await inquirer.prompt([
    {
      type: 'input',
      name: 'altura',
      message: 'Digite sua altura em centímetros:',
      validate: (valor) => {
        if (isNaN(valor) || valor <= 0) {
          return 'Por favor, digite um número válido.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'peso',
      message: 'Digite seu peso em quilogramas:',
      validate: (valor) => {
        if (isNaN(valor) || valor <= 0) {
          return 'Por favor, digite um número válido.';
        }
        return true;
      },
    },
  ]);

  const altura = parseFloat(respostas.altura);
  const peso = parseFloat(respostas.peso);