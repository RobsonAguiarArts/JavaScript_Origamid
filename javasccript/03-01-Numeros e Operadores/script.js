var idade = 38;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; // Exponencial
console.log(idade, gols, pi, exp);

// Operadores Aritiméticos

var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4 resto da divisão

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

//Operadores Aritiméticos (Strings)
var soma1 = "100" + 50; //10050
var subtracao1 = "100" - 50; //50
var multiplicacao1 = "100" * "2"; //200
var divisao1 = "Comprei 10" / 2; //NaN

console.log(soma1, subtracao1, multiplicacao1, divisao1);
console.log(isNaN(divisao1));

// NaN = Not a Number

var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // 80kg
var pesoPorDois = peso / 2; //NaN Not a Number
console.log(numero, unidade, peso, pesoPorDois);
console.log(isNaN(pesoPorDois)); // Verifica se é NaN
