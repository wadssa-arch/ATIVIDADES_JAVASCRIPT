import readlineSync from "readline-sync";

const numero: Set<number>= new Set ();

let numeros;


for (let i = 0; i < 10; i ++){
    numeros = readlineSync.questionInt("Escolha um numero inteiro: ");
    if(numero.has(numeros)){  
    console.log(`Nao pode ser numero repetido  ~.~`);      
        i--

    }else{ 
        numero.add(numeros);
    console.log(`${numeros} ^-^`);  

    }
 }

 

