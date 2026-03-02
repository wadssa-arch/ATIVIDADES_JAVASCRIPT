const leia = require('readline-sync');

let salario;
let abono;
let novosalario;

salario = leia.questionFloat("Digite seu Salario R$: ");
console.log(` Valor do Salario e R$  ${salario}`);

abono = leia.questionFloat("Agora digite o Abono R$: ");
console.log(` Valor do Abono e R$ ${abono}`);


novosalario = salario + abono;

console.log(`O Seu novo Salario e R$ ${novosalario}`);