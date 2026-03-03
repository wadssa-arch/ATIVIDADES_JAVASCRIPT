import leia from "readline-sync";

let tipo;
let classe;
let alimentacao;


console.log("\n Vamos brincar! escolha as 3 característas que te falo que animal e \n")
console.log("1 - Seu animal e Vertebrado");
console.log("2 - Seu animal e Invertebrado");
tipo = leia.questionInt("\n Digite a opcao desejada: "); 

console.log("\n hum pensando ..... \n")
console.log("-=-=-segunda caracteristica -=-= \n")
console.log("3 - Seu animal e mamifero");
console.log("4 - Seu animal e Ave");
console.log("5 - Seu animal e inseto");
console.log("6 - Seu animal e anelídeo");
classe= leia.questionInt("Digite a opcão desejada: ");


console.log("\nQuase lá! ..... \n")
console.log("-=-=-Terceira caracteristica -=-=\n ")
console.log("7 - Seu animal e Carnivoro");
console.log("8 - Seu animal e Onivero");
console.log("9 - Seu animal e herbivoro");
console.log("10 - Seu animal e Hematofago");
console.log("11 - Seu animal e Herbivoro");
alimentacao= leia.questionInt("Digite a opccaao desejada: ");


if (tipo == "1" && classe == "3" && alimentacao == "8") {
    console.log(" HA! HA! Matei a charada o animal e :> HOMEM");

} else if (tipo == "1" && classe == "3" && alimentacao == "9") {
    console.log("HA! HA! Matei a charada o animal e :> VACA");

} else if (tipo == "1" && classe == "4" && alimentacao == "8") {
    console.log("HA! HA! Matei a charada o animal e :> POMBA");

} else if (tipo == "1" && classe == "4" && alimentacao == "7") {
    console.log("HA! HA! Matei a charada o animal e :> AGUIA");

} else if (tipo == "2" && classe == "5" && alimentacao == "10") {
    console.log("HA! HA! Matei a charada o animal e :> PULGA");

} else if (tipo == "2" && classe == "5" && alimentacao == "11") {
    console.log("HA! HA! Matei a charada o animal e :> LAGARTA");

} else if (tipo == "2" && classe == "6" && alimentacao == "8") {
    console.log("HA! HA! Matei a charada o animal e :> MINHOCA");

} else if (tipo == "2" && classe == "6" && alimentacao == "10") {
    console.log("HA! HA! Matei a charada o animal e :> SANGUESUGA");

} else {
    console.log("Entrada invalida");
}



