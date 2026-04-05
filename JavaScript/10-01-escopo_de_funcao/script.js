// "use strict";
// Escopo de função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}
mostrarCarro(); // Fusca; no console
// console.log(carro); // erro, carro is not defined

// Variavel Global (Erro)
//  Declarar variáveis sem a palara chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global) isso é um erro.
function tamanhoDaCasa() {
  casa = "Grande";
  console.log(casa);
}

tamanhoDaCasa(); // Grande
console.log(casa); // Grande

// 'use strict' no escopo do documento impede isso

// Escopo de Bloco

// Variáveis criadas com var, vazam do bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if (true) {
  var carro2 = "Ferrari";
  console.log(carro2);
}
console.log(carro2); // Carro
if (true) {
  let mes = "Janeiro";

  console.log(mes);
}
// console.log(mes); // Erro mes ins not defined

// Var vaza o Bloco

// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var ano = "2025";
  console.log(ano);
}
console.log(ano); // undefined
// Hoisting a variável vai ser jogada para o escopo do codigo, mas nao atribui valor pois está false

// Const e let no lugar de var

if (true) {
  const pais = "Brasil";
  console.log(pais);
}
// console.log(pais); // erro, pais is not defined

// {} cria um bloco

// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro = "Fusca";
  const dia = 25;
}
console.log(carro); // Carro
// console.log(dia); erro dia is not defined

// For Loop

// Ao utilizar var dentro de um for loop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.
