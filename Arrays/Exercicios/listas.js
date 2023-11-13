// Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

const lst = [];

for(i = 0; i <= 5; i++){
    lst.push(i);
}

console.log(lst)


// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

function lista(n){
    let lst = [];
    for(i = 1; i <= n; i++){
        lst.push(i);
    }
    return lst;
}

const l = lista(10);

for(i = l.length; i >= 0; i--){
    console.log(i)
}
