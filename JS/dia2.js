//Desafio 2 
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual tipo de linguagem você esta estudando?");
const cidade = prompt("Qual a sua cidade?");
const msg = `Olá, seu nome é ${nome}, você é de ${cidade}, tem ${idade} anos e já esta aprendendo ${linguagem}!`;
alert(msg);
const duvida = prompt ("Você esta gostando de aprender ${linguagem}? Responda 1 para SIM e 2 para NÂO");

if (duvida == 1){
    alert ('Muito bom! Continue estudando e você terá muito sucesso.')
}
if (duvida == 2) {
    alert ('Ahh que pena... Já tentou aprender outras linguagens?')
}
    