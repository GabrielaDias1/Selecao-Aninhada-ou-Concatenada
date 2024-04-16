/*Exercicio 27 FACCAT
Ler um valor e escrever se é positivo, negativo ou zero.*/
function exercicio01(){
    let numero1 = parseInt(prompt("Digite um numero: "));
    if (numero1 > 0){
        alert("Numero positivo!")
    } else if (numero1 < 0)  {
        alert("Numero negativo!");
    } else  {
        alert("Numero zero");
    }
}
