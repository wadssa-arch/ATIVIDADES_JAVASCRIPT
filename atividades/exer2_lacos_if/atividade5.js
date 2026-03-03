import leia from "readline-sync";

let opcao;
let cachorroquente = 10.00;
let xsalada = 15.00;
let xbacon = 18.00;
let bauru = 12.00;
let refrigerenate = 8.00;
let suco = 13.00;
let quantidade;

console.log("\n-=-=-BEM VINDOS A LANCHONETE DA WADSSA-=-=-\n")
console.log("-=-=-=-=CARDAPIO-=-=---=-=\n")
console.log("1 - Cachorro Quente:> R$ 10.00");
console.log("2 - X- Salada:> R$ 15.00");
console.log("3 - X -Bacon:> R$ 18.00");
console.log("4 - Bauru:> R$ 12.00");
console.log("5 - Refrigerante:> R$ 8.00");
console.log("6 - Suco de laranja:> R$ 13.00");

opcao = leia.questionInt("\nDigite o numero da opcao desejada: ");
quantidade = leia.questionFloat("\nDigite a quantidade: ");


switch(opcao){
   case 1:
       console.log(`Produto: Cachorro quente `);
       console.log(`Valor total:> ${cachorroquente* quantidade} `);
       break;

    case 2:
       console.log(`Produto: X-Salada`);
       console.log(`Valor total:> ${xsalada* quantidade} `);
       break;
    case 3:
       console.log(`Produto: X-Bacon `);
       console.log(`Valor total:> ${xbacon * quantidade} `);
       break;
    case 4:
       console.log(`Produto: Bauru `);
       console.log(`Valor total:> ${bauru* quantidade} `);
       break;

    case 5:
       console.log(`Produto: Refrigerante `);
       console.log(`Valor total:> ${refrigerenate * quantidade} `);
       break;

    case 6:
       console.log(`Produto: Suco de laranja `);
       console.log(`Valor total:> ${suco * quantidade} `);
       break;

}