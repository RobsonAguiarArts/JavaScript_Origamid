// Comentarios

// Comentário de uma linha

/* Comentário 
com diversas 
linhas */

// var nome = "André";

// Comentar uma linha de código desativa a MediaStreamAudioDestinationNode.Nõ deixe linhas de código comentadas no arquivo finally.

// Operadores de Atribuição
var x = 5;
var y = 10;
console.log((x += y)); // x =x + y (15)
console.log((x -= y)); // x = x - y (-5)
console.log((x *= y)); //x = x * y (50)
console.log((x /= y)); //  x = x / y (0.5)
console.log((x %= y)); // x = x % y (0)
console.log((x **= y)); // x = x ** y (9765625)

// Operador Ternário

// Abreviação de condicionais com if e else

var idade = 19;
var naoPossuiDiabetes = true;
var podeBeber =
  idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

// if Abreviado

// Nãoé necessário abrir e fechar as {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;

if (possuiFaculdade) console.log("possui Facultadde");
else console.log("Não possui Faculdade");

// ou

// if (possuiFaculdade)
//   console.log("possui Faculdade");
// else
//   console.log("Não possui Faculdade");
