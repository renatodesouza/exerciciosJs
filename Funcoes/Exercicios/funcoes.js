// Faça um programa com uma função chamada somaImposto. 
// A função possui dois parâmetros formais: 
// taxaImposto, que é a quantia de imposto sobre vendas 
// expressa em porcentagem e custo, que é o custo de um item 
// antes do imposto. A função “altera” o valor de custo para 
// incluir o imposto sobre vendas.

function somaImposto(taxa_imposto, custo_produto){
    valor_imposto = taxa_imposto * custo_produto;
    custo_produto + valor_imposto;
    return custo_produto;
}


// Faça um programa que calcule as horas trabalhadas

function calculoHorasTrabalhadas(salario, horasTrabalhadasMes){
    let salarioHora = salario / horasTrabalhadasMes;

    total_por_hora = salarioHora.toLocaleString('pt-br', {style:'currency', currency:'BLR'});
    return total_por_hora;

}

console.log(calculoHorasTrabalhadas(1800, 220))






