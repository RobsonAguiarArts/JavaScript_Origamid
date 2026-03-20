// condidional IF ELSE
var possuiGraduacao = false;
var possuiDoutorado = false;
if (possuiGraduacao) {
  console.log("é Verdadeiro");
  var x = 10;
  // Se o if não for verdadeiro, ele testa o else if
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}
if (possuiGraduacao) {
  console.log("possui");
}

var nome = "André";
if (nome) {
  console.log(nome);
} else {
  console.log("nome não existe");
}
// Truthy e Falsy

// Existem valores que retornam true e outros que retornam false quando verificamos em uma expressão booleana.

//Falsy
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (""); // ou "" u ``

// Todo o resto é truthy
if (true);
if (1);
if (" ");
if ("andré");
if (-5);
if ({});

// Operação Lógico de Negação !
// Operação ! , nega uma operação booleana. Ou seja, !true é igual a false.

// Truthy
if (!true); //false
if (!1); //false
if (!""); //true
if (!undefined); //true
if (!!" "); //true
if (!!""); //false

// Dica, você pode utilizar !! para verificar se uma expressão é Truthy ou False

// Operadores de comparação

// Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

// Operadores de Comparação

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == "10"; // true
10 == 10; //true
10 === "10"; //false
10 === 10; //true
10 != 15; //true
10 != "10"; //false
10 !== "10"; //true
