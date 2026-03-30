// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
minhaIdade = 9;
idadeIrmao = 10;
if (minhaIdade > idadeIrmao) {
  console.log("Sou mais velho que meu irmão");
} else if (minhaIdade === idadeIrmao) {
  console.log("Somos Gemeos");
} else {
  console.log("Sou mais novo do que meu Irmão");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  `nome é ${!!nome}, Idade é ${!!idade},Possui Doutorado é ${!!possuiDoutorado}, Emprego Futuro é ${!!empregoFuturo}, Dinheiro na Conta é ${!!dinheiroNaConta} `,
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil >= china) {
  console.log("O Brasil tem mais habtantes que na China");
} else {
  console.log("A China tem mais habitantes do que no Brasil");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// cão
