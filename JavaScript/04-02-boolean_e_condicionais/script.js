// Operadores Lógicos &&

// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; //false
"Gato" && "Cão"; //'Cão'*
5 - 5 && 5 + 5; //0*
"Gato" && false; //false
5 >= 5 && 3 < 6; //true

// Se ambos os valores forem true irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

var condicional = 5 - 5 && 5 + 5;
if (condicional) {
  console.log("verdadeiro");
} else {
  console.log("false");
}

// Operadores lógicos  ||

// || Compara se uma expressão ou outra é verdadeira

true || true; //true
true || false; //true
false || true; //true
"Gato" || "Cão"; //'Gato'
5 - 5 || 5 + 5; //10
"Gato" || false; // 'Gato';
5 >= 5 || 3 < 6; //true

// Retorna o primeiro valor true que encontrar

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;

console.log(condicional2); // o Primeiro true é retornado e nao faz mais a operação.

// Switch

// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Amarelo":
    console.log("Olhe para o Sol.");
    break;
  case "verde":
    console.log("Olhe para a Floresta.");
    break;
  default:
    console.log("Feche os Olhos.");
}
