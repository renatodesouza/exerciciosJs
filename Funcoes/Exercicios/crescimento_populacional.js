// Supondo que a população de um país A seja da ordem de 80.000 habitantes 
// com uma taxa anual de crescimento de 3% e que a população de B seja 
// 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa 
// que calcule e escreva o número de anos necessários para que a população 
// do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let populacao_A = 80000;

let populacao_B = 200000;

let taxa_A = 0.3;

let taxa_B = 1.5;

let count = 0;

while(populacao_A < populacao_B){
    populacao_A += populacao_A * taxa_A;

    populacao_B += populacao_B * taxa_B;

    count += 1;
}

console.log(populacao_A);

console.log(populacao_B);

console.log(`Total de anos passado ${count}`);


