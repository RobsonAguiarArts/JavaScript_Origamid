// Array

// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores e uma única variável

var videoGames = ["Switch", "PS4", "XBox"];

console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // XBox

// Acesse um elemento da Array utilizando [n]

// Métodos e Propriedades de uma Array

console.log(videoGames.pop()); //Remove o ultimo item e retorna ele
console.log(videoGames.push("3DS")); // Adiciona ao final da Array
console.log(videoGames.length);
console.log(videoGames);
// Existem diversos outros métodos como Map, reduce, forEach e mais que veremos mais à frente

// For Loop

// Fazem algo repetidamente até que uma condição seja atendida

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}
// Retorna de 0a a 10 no console.
// O for loop possui 3 partes, início, condição e incremento

// While Loop
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 10 no console
// O for loop é mais comum
