// A ordem importa

// Começa por multiplicação e divisão, depois por soma e subtração
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40
console.log(total1, total2, total3, total4);
// Parênteses para priorizar uma expressão

var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10; //110
console.log(soma1);

// Operadores Aritiméticos Unários

var incremento = 5;

console.log(incremento++); //5 incrementa depois modifica
console.log(incremento); //6

var incremento2 = 5;
console.log(++incremento2); // 6 incrementa e modifica
console.log(incremento2); //6

var decremento = 5;
console.log(decremento--); //5
console.log(decremento); // 4

// O + e - tenta transformar o seguinte número

var idade = "28";
var somaIdade = 5;
console.log(somaIdade); //não soma
console.log(+idade + somaIdade); //transformou em número
console.log(typeof idade); //string
console.log(typeof +idade); // number
