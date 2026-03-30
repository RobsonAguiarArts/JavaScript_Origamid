// Funções
// Bloco de código que pode ser executado e reutilizado,. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areQuadrado(lado) {
  return lado * lado;
}
console.log(areQuadrado(4)); // 16
console.log(areQuadrado(5)); //25
console.log(areQuadrado(2)); //4
// chamada de function declaration
function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total.toFixed(1)); //15.7

function mediaAnual(media) {
  return media;
}
console.log(mediaAnual((12 * 500) / 12));

// Parâmetros e Argumentos

// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

//peso e altura são os parâmetros

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
console.log(imc(80, 180)); //80 e 1,80 são argumentos
console.log(imc(60, 170)); // 60 e 1,70 são argumentos

// separar por virgula cada parâmetro. Voê pode definir mais de um parâmetro ou nenhum também.
// Parênteses executa a função

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
console.log(corFavorita()); // retorna você não gosta de nada

// Se apenas definirmos a função com o function e não execuarmos a MediaStreamAudioDestinationNode, nada que estiver dentro dela irá acontecer

// Argumentos podem ser funções

// Chamadas de Callback, geralmente são funções que ocorrem após algum EventCounts.

addEventListener("click", function () {
  console.log("Clicou");
});

// A função possui dois argumentos
// Primeiro é a string 'click'
//Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritos como function() {} ou () => {}
function mostraConsole() {
  console.log("Cliquei");
}

addEventListener("click", mostraConsole);
