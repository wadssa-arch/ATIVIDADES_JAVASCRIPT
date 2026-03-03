import leia from 'readline-sync';

let numero;

numero = leia.questionInt("Digite um Numero: ");

if(numero === 0){
    console.log(`O numero ${numero} e PAR é NEUTRO!`);

}else if(numero % 2 == 0  && numero > 0 ){
    console.log(`O numero ${numero} e PAR é POSITIVO!`);

}else if(numero % 2 === 0 && numero < 0 ){
    console.log(`O numero ${numero} e PAR é NEGATIVO!`);

}else if(numero % 2 != 0  && numero < 0 ){
    console.log(`O numero ${numero} e IMPAR é NEGATIVO!`);

}else{ 
    console.log(`O numero ${numero} e IMPAR é POSITIVO!`);
}    


