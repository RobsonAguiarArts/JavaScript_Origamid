// Tudo é Objeto

// Strings, Numeros, boolean, Objetos e mais, possuem propriedades e métodos. Por isso são Objetos.

var nome = "Robson";
console.log(nome.length); //6
console.log(nome.charAt(1)); //o
console.log(nome.replace("son", "inho")); // Robinho
console.log(nome); // Robson
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
// Uma string herda propriedades e métodos do construtor String()

// Números
var altura = 1.8;
console.log(typeof altura);
console.log(typeof altura.toString());
console.log(altura.toFixed());

// Por um breve momento o npumero é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.

// Funções tambem possuem métodos e propriedades

function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(5));
console.log(areaQuadrado.toString());
// function areaQuadrado(lado) {
//   return lado * lado;
// }
console.log(areaQuadrado.length);

// Elementos DOM
var btn = document.querySelector(".btn");
btn.classList.add("azul");
btn.innerText;
btn.addEventListener("click", function () {
  console.log("Clicou");
});
// Praticamente todos so efeits com JS são feitos utilizando propriedades e métodos de objetos do DOM.
