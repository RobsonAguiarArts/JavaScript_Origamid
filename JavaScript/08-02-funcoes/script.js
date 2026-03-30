// Pode ou não retornar um valor

// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc(peso, altura) {
  const imc = (peso / altura) * 2;
  console.log(imc);
}
imc(80, 1.8); //retorna IMC
console.log(imc(80, 1.8)); //retorna oimc e undefined

// Valores retornados

// uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade());

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

// Escopo
// Variáveis e funções definidas dentro de um bloco {}, não são visiveis fora delete.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises.`;
}
console.log(precisoVisitar(10));

// Escopo Léxico

// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Designer";

function dados() {
  var nome = "Amdré";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
  }
}
