const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let calculo;


n1 = leia.questionFloat("Digite seu primeiro numero:> ");
n2 = leia.questionFloat(`Digite Seu Segundo Numero:> `);
n3= leia.questionFloat("Digite Seu Terceiro Numero:> ");
n4 = leia.questionFloat("Digite Seu Qaurto Numero:> ");

calculo =( n1 * n2 ) - (n3 * n4);
console.log(` A Diferença Entre Os Numeros:> ${calculo}`);