/* Exercicio 28 FACCAT
Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/
function exercicio02(){
    let numero1 = parseInt(prompt("Digite um numero: "));
    let numero2 = parseInt(prompt("Digite outro numero: "));
    let numero3 = parseInt(prompt("Digite outro numero: "));
    if ((numero1 > numero2) && (numero1 > numero3)){
        alert("O maior numero é "+ numero1)
    } else if ((numero2 > numero1) && (numero2 > numero3)){
        alert("O maior numero é: "+numero2)
    } else{
        alert("O maior numero é: "+ numero3)
    }
}