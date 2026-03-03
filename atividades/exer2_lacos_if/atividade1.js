import leia from 'readline-sync';

let numeroA;
let numeroB;
let numeroC;
let soma;

numeroA = leia.questionInt("Digite o Primeiro Numero: ");
numeroB= leia.questionInt("Digite o Segundo Numero: ");
numeroC = leia.questionInt("Digite o Terceiro Numero: ");
soma = (numeroA + numeroB);

if(soma > numeroC){
    console.log(`A soma de ${numeroA} + ${numeroB} = ${soma} E  MAIOR que ${numeroC}`);
 
}else if (soma == numeroC){
    console.log(`A soma de ${numeroA} + ${numeroB} = ${soma} E é IGUAL ${numeroC}`);


}else{
    console.log(`A soma de ${numeroA} + ${numeroB} = ${soma} E é MENOR que ${numeroC}`);
}
