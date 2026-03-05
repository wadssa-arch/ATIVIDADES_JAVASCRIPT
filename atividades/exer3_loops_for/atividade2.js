import leia, { keyInYN } from 'readline-sync';

let contador
let numero
let pares = 0
let impares = 0



 for (let i = 1; i <=10 ; i++){  
       numero = leia.questionInt(`Digite ${i} numero:> `);

    if(numero % 2 == 0 ){
        pares++
     
    }else
        impares++
 }

        console.log(`Total de números pares: ${pares}`);
        console.log(`Total de números ímpares: ${impares}`);
         
         
         




       
       
      


    
    
        