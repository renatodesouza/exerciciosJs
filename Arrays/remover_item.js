const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// O método splice é utilizado para remover mais de um item do array
// O primeiro parametro indica onde começara o remoção
// o segundo indica a quantidade de itens a serem removidas

// const remove = array.splice(2, 3);

const add = array.splice(1, 4, 8)

// console.log(remove);

console.log(add)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

