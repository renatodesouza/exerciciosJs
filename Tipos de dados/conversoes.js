let numero = 123;
let numeroString = '123';

// Comparacao implicita
// OBS === Verifica se os operadores e os tipos são iguais
console.log(numero === numeroString);

// Comparacao explicita
// OBS verifica somente se os operadores são iguais, não verifica os tipos dos mesmos
console.log(numero == numeroString);

console.log(numero + numeroString);

//Utilizamos String() para converter em um texto
console.log(String(numero) + numeroString);

//Utilizamos o Number() para converter o numero que estava em string
console.log(numero + Number(numeroString));

// Retorna NaN 
console.log(123 + Number('123a'));