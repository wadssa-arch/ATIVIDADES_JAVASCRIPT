import readlineSync from "readline-sync";

const cores: Array<string> = new Array(5);
let cor;


for (let i = 0; i < cores.length; i++) {

    cor = readlineSync.question(`Digite uma cor:> `);
    cores[i] = cor;
    
    console.log(cores);
    cores.sort()
}