const prompt = require("prompt-sync")();

// 1
console.log("1. Quadrado dos números de 1 a 10");
for (let i = 1; i <= 10; i++) {
    console.log(i + "² = " + (i * i));
}

// 2
console.log("\n2. Números de 10 a 1");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3
console.log("\n3. Soma dos números de 1 a 100");
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("Resultado:", soma);

// 4
console.log("\n4. Tabuada do 5");
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`);
}

// 5
console.log("\n5. Tabuada escolhida pelo usuário");
let numero = Number(prompt("Digite um número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);
}

// 6
console.log("\n6. Números ímpares de 1 a 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 7
console.log("\n7. Crescente");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Decrescente");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 8
console.log("\n8. Fatorial");
let n = Number(prompt("Digite um número: "));
let fatorial = 1;

for (let i = 1; i <= n; i++) {
    fatorial *= i;
}

console.log("Fatorial =", fatorial);

// 9
console.log("\n9. FizzBuzz");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 10
console.log("\n10. Série");
let serie = 0;

for (let i = 1; i <= 10; i++) {
    serie += 1 / i;
}

console.log("Resultado =", serie);

// 11
console.log("\n11. Pares e ímpares");

let limite = Number(prompt("Digite um número: "));
let pares = 0;
let impares = 0;

for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);

// 12
console.log("\n12. Maior e menor valor");

let lista = [10, 5, 30, 2, 15];

let maior = lista[0];
let menor = lista[0];

for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
        maior = lista[i];
    }

    if (lista[i] < menor) {
        menor = lista[i];
    }
}

console.log("Maior:", maior);
console.log("Menor:", menor);

// 13
console.log("\n13. Média da lista");

let numeros = [10, 20, 30, 40, 50];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
}

console.log("Média =", total / numeros.length);

// 14
console.log("\n14. Verificar se é primo");

let primoNum = Number(prompt("Digite um número: "));
let primo = true;

if (primoNum < 2) {
    primo = false;
}

for (let i = 2; i < primoNum; i++) {
    if (primoNum % i === 0) {
        primo = false;
    }
}

if (primo) {
    console.log("É primo");
} else {
    console.log("Não é primo");
}

// 15
console.log("\n15. Números primos de 1 a 50");

for (let num = 2; num <= 50; num++) {

    let ehPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(num);
    }
    // 1. Aclamação repetida
let palavra = prompt("Digite uma palavra:");

for (let i = 1; i <= 10; i++) {
    console.log(palavra);
}


// 2. Somando números pares
let numero = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 2; i <= numero; i += 2) {
    soma += i;
}

console.log("Soma dos pares = " + soma);


// 3. Lista de compras
let item;
let lista = [];

do {
    item = prompt("Digite um item da lista ou 0 para parar:");

    if (item != "0") {
        lista.push(item);
    }

} while (item != "0");

console.log("Lista de compras:");
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}


// 4. Números ímpares inversos
let n = Number(prompt("Digite um número:"));

for (let i = n; i >= 1; i--) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// 5. Sequência de asteriscos
for (let i = 1; i <= 5; i++) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
        linha += "*";
    }

    console.log(linha);
}


// 6. Jogo de adivinhação
let secreto = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;
let palpite;

do {
    palpite = Number(prompt("Adivinhe o número entre 1 e 100:"));
    tentativa++;

    if (palpite > secreto) {
        alert("Muito alto!");
    } else if (palpite < secreto) {
        alert("Muito baixo!");
    } else {
        alert("Parabéns! Você acertou em " + tentativa + " tentativas.");
    }

} while (palpite != secreto);


// 7. Preenchendo um quadro
let largura = Number(prompt("Digite a largura do quadro:"));
let altura = Number(prompt("Digite a altura do quadro:"));

for (let i = 1; i <= altura; i++) {

    let linha = "";

    for (let j = 1; j <= largura; j++) {
        linha += "#";
    }

 let quantidade = Number(prompt("Quantos salários serão digitados?"));

let folhaAntiga = 0;
let folhaNova = 0;
let maiorSalario = 0;

for (let i = 1; i <= quantidade; i++) {

    let salario = Number(prompt("Digite o salário " + i + ":"));

    folhaAntiga += salario;

    let salarioCorrigido = salario;

    if (salario < 2500) {
        salarioCorrigido = salario * 1.10;
    }

    folhaNova += salarioCorrigido;

    if (salarioCorrigido > maiorSalario) {
        maiorSalario = salarioCorrigido;
    }
}

document.write("<h2>Resultado</h2>");
document.write("Folha antiga: R$ " + folhaAntiga.toFixed(2) + "<br>");
document.write("Folha corrigida: R$ " + folhaNova.toFixed(2) + "<br>");
document.write("Maior salário após aumento: R$ " + maiorSalario.toFixed(2));   console.log(linha);
}
}