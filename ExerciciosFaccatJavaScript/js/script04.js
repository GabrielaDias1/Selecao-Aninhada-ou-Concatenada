/* Exercicio 30 FACCAT
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente.*/
function exercicio04(){
    let numero1 = parseInt(prompt("Digite o primeiro numero: "));
    let numero2 = parseInt(prompt("Digite o segundo numero: "));
    let numero3 = parseInt(prompt("Digite o terceiro numero: "));
    let menor = numero1
    let medio = numero2
    let maior = numero3
    let troca;

    if ( menor > medio ){
        troca = menor
        menor = medio
        medio = troca
    }
    if ( menor > maior ){
        troca = menor
        menor = maior
        maior = troca
    } 
       if  ( medio > maior ){
            troca = medio
            medio = maior
            maior = troca
        }

     alert("Os valores em ordem crescente são: "+menor+" "+medio+" "+maior)   
    
}