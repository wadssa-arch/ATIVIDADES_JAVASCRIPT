import readlineSync from "readline-sync";

const numero: Set<number> = new Set([2,5,1,3,4,9,7,8,10,6]);
let numeros: number;
let encontrado = false;

numeros = readlineSync.questionInt("Escolha um numero inteiro: ");

for (let numero1 of numero){
        if(numeros == numero1){ 
            encontrado = true;

         }
}
 if(encontrado){ 
    console.log(`o ${numeros} foi encontrado ^-^`);
 }else{
     console.log(`o ${numeros} não foi encontrado °~°`);
 }
 

