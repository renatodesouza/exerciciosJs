const arrowNome = nome => `meu nome e ${nome} `;

console.log(arrowNome('lucas'))

const soma = (num1, num2) => num1 + num2 ;

console.log(soma(2, 5))

// Com return

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 >10){
        return 'Somente numeros de 1 a 9';
    }else{
        return num1 + num2;
    }

}

console.log(somaNumerosPequenos(2, 11))


const verificaNumeroPar = valor => {
    if (valor % 2 == 0){
        return `O número é ${valor} par`;
    }else{
        return `O número ${valor} não é par`
    }
}

console.log(verificaNumeroPar(3))