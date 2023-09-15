// Crie duas Strings para testes; // 
const primeiraString = "Esta é a primeira string.";
const segundaString = "Esta é a segunda string.";

console.log(primeiraString);
console.log(segundaString);

// Conte os caracteres de uma de suas Strings; //
const outraString = "Esta é a primeira string.";
const contadorDeCaracteres = outraString.length;

console.log(`A primeira string tem ${contadorDeCaracteres} caracteres.`);


//Fatie uma de suas Strings; // 
const terceiraString = "Esta é a primeira string.";

// Fatiando a string da posição 5 até a posição 12
const fatia = terceiraString.substring(5, 13);

console.log(fatia);


// Atividade 2 // 

//Crie pelo menos cinco Arrays para testes;//
const numeros = [1, 2, 3, 4, 5];
const nomes = ["Alice", "Bob", "Charlie", "David", "Eve"];
const pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Carlos", idade: 40 },
  ];
  const booleanos = [true, false, true, true, false];
  const cores = ["vermelho", "azul", "verde", "amarelo", "roxo"];

// Conte a quantidade de itens do seu array; // 
const meuArray = [1, 2, 3, 4, 5];
const quantidadeItens = meuArray.length;

console.log("A quantidade de itens no meuArray é:", quantidadeItens);

// Remova e Adicione itens no array; // 

// Adicionando //
const nuumeros = [1, 2, 3];
numeros.push(4);
console.log(nuumeros); // [1, 2, 3, 4]

const Numeros = [1, 2, 3];
numeros.push(4);
console.log(Numeros); // [1, 2, 3, 4]

// Removendo // 
const nUmeros = [1, 2, 3, 4];
const ultimoElemento = numeros.pop();
console.log(nUmeros); // [1, 2, 3]
console.log(ultimoElemento); // 4

const nuMeros = [1, 2, 3, 4];
numeros.splice(1, 1); // Remove o elemento na posição 1
console.log(nuMeros); // [1, 3, 4]


// Ordene um de seus arrays; // 
const numbers = [4, 2, 5, 1, 3];

// Usando o método sort para ordenar em ordem crescente
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 3, 4, 5]
