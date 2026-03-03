import leia from "readline-sync";


let Gerente = 1;
let Vendedor = 2;
let Supervisor = 3;
let Motorista = 4;
let Estoquista = 5;
let TecnicoTI = 6;

let nome;
let salario;
let cargo;


nome = leia.question("Nome do colaborador: ");
console.log("Cargos disponíveis:");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico de TI");
cargo = leia.questionInt("Digite o codigo do seu cargo: ");
salario = leia.questionFloat("Qual é o seu salario? R$ ");


let reajuste = 0;
let nomeCargo = "";


switch(cargo) {
    case 1:
        reajuste = 0.10;
        nomeCargo = "Gerente";
        break;
    case 2:
        reajuste = 0.07;
        nomeCargo = "Vendedor";
        break;
    case 3:
        reajuste = 0.09;
        nomeCargo = "Supervisor";
        break;
    case 4:
        reajuste = 0.06;
        nomeCargo = "Motorista";
        break;
    case 5:
        reajuste = 0.05;
        nomeCargo = "Estoquista";
        break;
    case 6:
        reajuste = 0.08;
        nomeCargo = "Técnico de TI";
        break;
    default:
        console.log("Cargo inválido!");
}


if (reajuste > 0) {
    let novoSalario = salario + (salario * reajuste);
    console.log(`\nNome do colaborador: ${nome}`);
    console.log(`Cargo: ${nomeCargo}`);
    console.log(`Salario: R$ ${novoSalario}`);
}