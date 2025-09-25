console.log("Full Stack Web Dev.");
console.log("Bem Vindo Ao Curso.");

// Variables
let nome = "Eduardo";
let idade = 333;
let estaAprovado = true;
let sobrenome = "";
let corSelecionada = null;

// Objeto

let pessoa = {
  nome: "Eduardo",
  idade: 333,
  estaAprovado: true,
  sobrenome: "Querino ",
  altura: 1.55,
  peso: 70.0,
  tatuagem: true,
};

console.log(pessoa);

// Arrays - Acessar a variable pelo indices

let familia = ["Eduardo", 333, true];

console.log(familia.length);
console.log(familia[0]);

// FUNÇÃO - Verbo + Substantivo ex: resetCor

let corSite = "Azul";
function resetCor(cor, tonalidade) {
  corSite = cor + tonalidade;
}

console.log(corSite);
resetCor("Verde", " Claro");
console.log(corSite);

// Faz um calculo e retorna algo.

function MultiplicarPorDois(valor) {
  return valor * 2;
}

let resultado = MultiplicarPorDois(5);

console.log(resultado);

// Operadores de Igualdade

// Igualdade Estrita

console.log(1 === 1);
console.log("1" === 1);

// Igualdade Solta

console.log(1 == 1);
console.log("1" == 1);

// Operador Ternário
// EX: Tem um que cliente que se tiver +100 ponto é premium, caso contrario será do tipo comum.

let pontos = 101;
let tipo = pontos > 100 ? "Premium" : "Comum";
console.log(tipo);

// Operadores Logical

// "e" = "&&" Retorna TRUE se os dois operandos forem TRUE.

console.log(true && true);
console.log(false && true);

//Example

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log("Candidato Pode Aplicar: ", podeAplicar);

// "ou" = "||" Retorna TRUE se um dos operandos forem TRUE.

let menorDeIdade = true;
let possuiCarteiraDeHab = true;
let aptoCondutor = menorDeIdade || possuiCarteiraDeHab;
console.log(aptoCondutor);

// "NOT" = "!" Negação

let candidatoRecusado = !podeAplicar;
console.log("Candidato Recusado.", candidatoRecusado);

// Condicionais IF & ELSE

// Se a hora estiver entre 6:00 e 12:00 : Bom Dia !
// Se a hora  estiver entre 12:00 e 18:00 : Boa Tarde !
// Se a hora estiver entre 18:00 e 23:59 : Boa Noite !

let hora = 10;
if (hora >= 6 && hora < 12) {
  console.log("Bom Dia !");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa Tarde !");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa Noite !");
}

// SWITCH & default

let permission;

switch (permission) {
  case "admin":
    console.log("Você é administrador.");
  case "comum":
    console.log("Você é um usuário comum.");
    case "diretor":
    console.log("Você é diretor.");
  default:
    console.log("Usuário Não Reconhecido.");
} 
