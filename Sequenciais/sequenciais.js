// Faça um Programa que mostre a mensagem "Alo mundo" na tela.
console.log('Olá mundo');


// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
function pergunta(valor){
    var readline = require('readline');

    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(valor, function(answer){
        var resp = answer;
        console.log("O número informado foi " + resp);
        leitor.close();
    })
}

pergunta("Digite um número: ");


// Faça um Programa que peça dois números e imprima a soma.
var num1 = pergunta('Digite um numero: ');

// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
// Faça um Programa que converta metros para centímetros.
// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).