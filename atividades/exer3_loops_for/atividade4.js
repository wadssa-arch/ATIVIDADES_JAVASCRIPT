import leia from 'readline-sync';

let idade = 0;
let genero;
let desenvolvedora;

let contadorbackend = 0;
let contadormulherescisetransfronteend = 0;
let contadorhomenscisetransmobile40 = 0;
let contadornaobinariofull30 = 0;
let contadortotal = 0;

let continuar = true;


let contadormcis = 0;
let contadorhcis = 0;
let contadornãobinario = 0;
let contadormtrans = 0;
let contadorhtrans = 0;
let contadorgenerototal = 0;

while (continuar) {
    idade = leia.questionInt(`Digite sua idade:> `);

    console.log("-=-=-Identidade do GÊnero -=-= \n")
    console.log("1 - Mulher Cis");
    console.log("2 - Homem Cis");
    console.log("3 - Não Binário");
    console.log("4 - Mulher Trans");
    console.log("5 - Homem Trans");
    console.log("6 - Outros");
    genero = leia.questionInt(`Digite seu genero:> `);
    

    console.log("-=-=-Pessoa Desenvolvedora -=-=\n ")
    console.log("7 - BackEnd");
    console.log("8 - FrontEnd");
    console.log("9 - Mobile");
    console.log("10 - FullStack");
    desenvolvedora = leia.questionInt(`Digite sua stack :> `);

    
    if (desenvolvedora === 7) contadorbackend++;
    if ((genero === 1 || genero === 4) && desenvolvedora === 8) contadormulherescisetransfronteend++;
    if ((genero === 2 || genero === 5) && desenvolvedora === 9 && idade > 40) contadorhomenscisetransmobile40++;
    if (genero === 3 && desenvolvedora === 10 && idade < 30) contadornaobinariofull30++;

    contadortotal++;

  
    if (genero === 1) contadormcis++;
    if (genero === 2) contadorhcis++;
    if (genero === 3) contadornãobinario++;
    if (genero === 4) contadormtrans++;
    if (genero === 5) contadorhtrans++;
    if (genero === 6) contadorgenerototal++;

    
    let resposta = leia.question("Quer continuar? S/N: ").toUpperCase();
    if (resposta === "N") {
        continuar = false;
    }

}

console.log("\n--- Resultados da Pesquisa ---");
console.log("Número de pessoas Backend: ", contadorbackend);
console.log("Número de Mulheres Cis e Trans Frontend: ", contadormulherescisetransfronteend);
console.log("Número de Homens Cis e Trans Mobile > 40 anos: ", contadorhomenscisetransmobile40);
console.log("Número de Não Binários FullStack < 30 anos: ", contadornaobinariofull30);
console.log("Total de pessoas que responderam: ", contadortotal);
console.log("Contadores por gênero:");
console.log("Mulher Cis: ", contadormcis);
console.log("Homem Cis: ", contadorhcis);
console.log("Não Binário: ", contadornãobinario);
console.log("Mulher Trans: ", contadormtrans);
console.log("Homem Trans: ", contadorhtrans);
console.log("Outros: ", contadorgenerototal);