/*Exercicio 36 FACCAT
Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha. */
function exercicio10() {
    let maisNovo, maisNova, maisVelho, maisVelha;
    let soma, produto;
    let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
    let homem2 = parseInt(prompt("Digite a idade do segundo homem: "));
    let mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
    let mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

    if (homem1 > homem2) {
        maisVelho = homem1;
        maisNovo = homem2;
    } else {
        maisVelho = homem2;
        maisNovo = homem1;
    }

    if (mulher1 > mulher2) {
        maisVelha = mulher1;
        maisNova = mulher2;
    } else {
        maisVelha = mulher2;
        maisNova = mulher1;
    }
    soma = maisVelho + maisNova
    produto = maisNovo * maisVelha
    alert("A soma do homem mais velho com mulher mais nova: " + soma);
    alert("O produto da idade do homem mais novo com a mulher mais velha é: " + produto)
}