const leia = require('readline-sync');

let salariobruto ;
let adicionalnoturno ;
let extras ;
let descontos;
let salarioliquido;


salariobruto = leia.questionFloat("Digite Seu Salário bruto R$: ");
adicionalnoturno= leia.questionFloat(`Digite Seu Adicional R$: `);
extras = leia.questionFloat("Digite horas Extras R$: ");
descontos = leia.questionFloat("Digite Seu Desconto R$: ");

salarioliquido =( salariobruto + adicionalnoturno + (extras * 5) - descontos)
console.log(` O Seu Salário Liquido e R$: ${salarioliquido}`);