/*Exercicio 29 FACCAT
 Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores.*/
function exercicio03(){
    let numero1 = parseInt(prompt("Digite um numero: "));
    let numero2 = parseInt(prompt("Digite outro numero: "));
    let numero3 = parseInt(prompt("Digite outro numero: "));
    let maior, segundoMaior;
    if (numero1 >= numero2 && numero1 >= numero3) {
        maior = numero1;
        segundoMaior = Math.max(numero2, numero3);
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        maior = numero2;
        segundoMaior = Math.max(numero1, numero3);
    } else {
        maior = numero3;
        segundoMaior = Math.max(numero1, numero2);
    }
    let soma = maior + segundoMaior;
    alert("A soma dos dois maiores números é: " + soma);
}
