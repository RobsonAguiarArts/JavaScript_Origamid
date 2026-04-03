// variáveis
var nome = "Robson";
var idade = 23;
possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);
// Evitam repetições Sintaxe
var preco = 25;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
console.log(precoTotal);
// virgula
var sobrenome = "Aguiar",
  cidade = "São Paulo";
console.log(sobrenome, cidade);
// Sem valor
var semDefinir;
console.log(semDefinir); //undefined
/*console.log(aindaNaoDefini);*/

// Hoisting;

console.log(profissao); //Ainda não criei a variável
var profissao = "Técnico SericeDesk";
console.log(profissao);

// Mudar o vaor da variável

var time = "vasco";
var time = "flamengo";
console.log(time);

// let time1 = "vasco"; // não consegue criar novamente usando let
// let time1 = "flamengo"; // não consegue criar novamente usando let
// const time2 = "vasco"; // não pode modificar o valor da variável
// time2 = "flamengo";// não pode modificar o valor da variável
