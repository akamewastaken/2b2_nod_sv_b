function calcularIMC(altura, peso) {
  const alturaMetros = altura / 100;
  return peso / (alturaMetros * alturaMetros);
};

module.exports = {
  calcularIMC,
};

const imcCalculado = imc.calcularIMC(altura, peso);

let classificacao = '';
let cor = '';

if (imcCalculado < 18.5) {
  classificacao = 'Abaixo do peso';
  cor = chalk.blue;
} else if (imcCalculado < 25) {
  classificacao = 'Peso normal';
  cor = chalk.green;
} else if (imcCalculado < 30) {
  classificacao = 'Sobrepeso';
  cor = chalk.yellow;
} else if (imcCalculado < 35) {
  classificacao = 'Obesidade Grau I';
  cor = chalk.red;
} else if (imcCalculado < 40) {
  classificacao = 'Obesidade Grau II';
  cor = chalk.red;
} else {
  classificacao = 'Obesidade Grau III';
  cor = chalk.red;
}

console.log(chalk.bold(`Seu IMC é: ${imcCalculado.toFixed(2)}`));
console.log(`Classificação: ${cor(classificacao)}`);

main();