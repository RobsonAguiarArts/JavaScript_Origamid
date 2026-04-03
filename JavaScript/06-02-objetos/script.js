// Criar um Objeto

// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};
console.log(typeof carro); //'object'

// Dot Notation Get

// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  heigth: 50,
  backgroundColor: "#84E",
};
menu.backgroundColor = "#000";
// Adicionar Propriedades e Métodos
// Basta adicionar um novo nome e definir o valor.
menu.color = "blue";
menu.esconder = function () {
  console.log("escondi");
};
var bg = menu.backgroundColor; //"#84E"

// Palavra-chave this
// this irá fazer uma referência ao próprio objeto

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeheight() {
    return this.height / 2;
  },
};

console.log(menu.metadeheight()); // com o this é 25 pois pega o height que está dentro de menu, sem o this seria 60 pois pegaria o valor solto fora do menu 120 / 2

// Protótipo e Herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo

var menu = {
  width: 800,
};
console.log(menu.hasOwnProperty("width"));
console.log(menu.hasOwnProperty("heigth"));
// hasOwnProperty é um metodo de Object
