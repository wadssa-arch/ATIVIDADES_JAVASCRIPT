const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let media;


nota1 = leia.questionFloat("Digite Sua Primeira Nota ");
nota2 = leia.questionFloat(`Digite Sua Segunda Nota `);
nota3 = leia.questionFloat("Digite Sua Terceira Nota ");
nota4 = leia.questionFloat("Digite Sua Quarta Nota ");

media =( nota1 + nota2 + nota3 + nota4) / 4
console.log(` A sua média e :> ${media}`);