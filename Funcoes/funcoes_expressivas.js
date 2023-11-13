// Funcao tradicional em js
function soma_se(num1, num2){
    return num1 + num2;
}


// Um exemplo de funcao expressiva ou funcao anonima no js
// não é necessario colocar o nome da funcao apos a palavra reservada function
const soma = function(num1, num2){return num1 + num2};

const subtrai = function(num1, num2){
    return num1 - num2
};

const divisao = function(num1, num2){
    return num1 / num2
};

const multiplicacao = function(num1, num2){return num1 * num2}

console.log(soma(1, 2));

console.log(soma_se(1, 4))

console.log(subtrai(12, 4))

console.log(multiplicacao(12, 4))

console.log(divisao(16, 4))