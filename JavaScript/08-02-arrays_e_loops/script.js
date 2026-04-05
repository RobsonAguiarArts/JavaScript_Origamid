// Arrays e Loops
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
// O for loop é o mais comum
var carros = ["Ferrari", "Masserati", "Lamburguine", "Audi"];
var i = 0;
while (i < carros.length) {
  console.log(carros[i]);
  i++;
}
// No while ficaria assim
// Break

// O loop irá parar caso encontre a palabra Break

var celulares = ["Iphone", "Samsung", "Motorola", "LG"];

for (i = 0; i < celulares.length; i++) {
  console.log(celulares[i]);
  if (celulares[i] === "Samsung") {
    break;
  }
}
// Parou na palavra Samsung

// forEach

// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)

var pokemons = ["Pikachu", "Snorlax", "Charmander", "Magikarp"];
pokemons.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// O argumento Item será atribuido dinamicamente

// Podemos passar os seguintes parâmetros item, index e array

// Não se confunda com a sintaxe

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
// Não é aconselhavel escrever da forma acima, mas funciona normalmente.
