/*Exercicio 33 FACCAT
Analisando Dois Valores e Imprimindo Mensagens Correspondentes*/
function exercicio07(){
    let numero1 = parseInt(prompt("Digite um numero: "));
    let numero2 = parseInt(prompt("Digite um numero: "));
    if (numero1 === numero2){
        alert("Numero iguais!")
    } else if ( numero1 > numero2 ){
        alert("Primeiro numero é maior!")
    } else {
        alert("Segundo é maior!")
    }
}