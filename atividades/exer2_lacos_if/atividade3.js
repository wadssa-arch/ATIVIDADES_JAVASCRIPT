import leia from 'readline-sync';

let nome;
let idade;
let primeiraDoacao;

nome = leia.question("Digite o Nome do doador: ");
idade = leia.questionInt("Digite a Idade do doador: ");
primeiraDoacao = leia.question("Primeira doacao de sangue? (true/false): ");

primeiraDoacao = (primeiraDoacao === "true");

if (idade < 18) {
    console.log(`${nome} nao esta apto para doar sangue!`);

} else if (idade <= 59) {
    console.log(`${nome} esta apto para doar sangue!`);

} else if (idade >= 60 && idade <= 69) {

    if (primeiraDoacao === true) {
        console.log(`${nome} nao esta apto para doar sangue!`);
    } else {
        console.log(`${nome} esta apto para doar sangue!`);
    }

} else {
    console.log(`${nome} nao esta apto para doar sangue!`);
}