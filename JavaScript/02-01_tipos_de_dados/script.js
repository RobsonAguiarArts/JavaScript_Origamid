// Todos são primitivos exceto os objetos.

var nome = "Robson"; //string
console.log(nome, typeof nome);
var sobrenome = "Aguiar";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// var gols = 1000;
// var frase = "Romário fez " + gols + " gols";
// console.log(typeof frase);

var ano = "2018";
var mes = 8;
console.log(ano + mes);
var melhor = "teste";
var frase1 = "Esse é o " + melhor + " jogo";
console.log(frase1);

// template string
var gols = 1000;
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);

// -----------------------------------
var idade = 38; //Number
console.log(idade, typeof idade);
// -----------------------------------
var possuiFaculdade = true; // Boolean
console.log(possuiFaculdade, typeof possuiFaculdade);
// -----------------------------------
var time; // Undefined
console.log(time, typeof time);
// -----------------------------------
var comida = null; // Null
console.log(comida, typeof comida);
// -----------------------------------
var simbolo = Symbol; // Symbol
console.log(simbolo, typeof simbolo);
// -----------------------------------
var novoObjeto = {}; //Object
console.log(novoObjeto, typeof novoObjeto);
