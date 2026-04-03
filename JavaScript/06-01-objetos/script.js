// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: "Robson",
  idade: 35,
  profissao: "Dev",
  possuiFaculdade: true,
};
console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);

// propriedades e métodos consistem em nome (chave) e valor

// Métodos
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Abreviação de area: function() {} para area(){}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

// Organizar o Código

// Objetos servem para organizar o código em pequenas partes reutilizáveis

console.log(Math.PI);

console.log(Math.random());

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método ?
