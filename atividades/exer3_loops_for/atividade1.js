import leia, { keyInYN } from 'readline-sync';

let contador
let numero1 = leia.questionInt("Digite o primeiro  numero: ");
let numero2 = leia.questionInt("Digite o segundo numero: ");


if (numero1 >= numero2) { 
    console.log(`\nIntervalo Inválido!\n`)
    
    
} else 


    for (let contador = numero1; contador <= numero2; contador++) {

        if (contador % 15 === 0) {
            console.log(`${contador} é múltiplo de 3 e 5`);
           
    
           
            
        }

    }
    
        