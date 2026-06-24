//🐱‍🏍Aclamação repetida
// let palavra = prompt("Digite uma palavra:");

// for (let i = 1; i <= 10; i++) {
//     console.log(palavra);
// }

//Somando números pares
// let numero = parseInt(prompt("Digite um número:"));
// let soma = 0;

// for (let i = 2; i <= numero; i += 2) {
//     soma += i;
// }

// console.log("Soma = " + soma);

//Lista de compras
// let item;
// let lista = "";

// while (true) {
//     item = prompt("Digite um item (0 para parar):");

//     if (item === "0") {
//         break;
//     }

//     lista += item + "\n";
// }

// console.log("Lista de compras:");
// console.log(lista);

//Números ímpares inversos
// let numero = parseInt(prompt("Digite um número:"));

// for (let i = numero; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

//Números ímpares inversos
// let numero = parseInt(prompt("Digite um número:"));

// for (let i = numero; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

//Sequência de asteriscos
// for (let i = 1; i <= 5; i++) {
//     let linha = "";

//     for (let j = 1; j <= i; j++) {
//         linha += "*";
//     }

//     console.log(linha);
// }

//Jogo de adivinhação
// let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativas = 0;
// let palpite;

// do {
//     palpite = parseInt(prompt("Adivinhe o número (1 a 100):"));
//     tentativas++;

//     if (palpite > numeroSecreto) {
//         alert("Muito alto!");
//     } else if (palpite < numeroSecreto) {
//         alert("Muito baixo!");
//     } else {
//         alert("Acertou em " + tentativas + " tentativas!");
//     }
// } while (palpite !== numeroSecreto);

// //#️⃣#️⃣#️⃣#️⃣ Preenchendo um quadro
// let largura = parseInt(prompt("Digite a largura:"));
// let altura = parseInt(prompt("Digite a altura:"));

// for (let i = 1; i <= altura; i++) {
//     let linha = "";

//     for (let j = 1; j <= largura; j++) {
//         linha += "#";
//     }

//     console.log(linha);
// }