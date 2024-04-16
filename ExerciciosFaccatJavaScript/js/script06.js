/* Exercico 32 FACCAT
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.*/
function exercicio06(){
     let time1 = prompt("Digite o nome do primeiro time: ");
     let time2 = prompt("Digite o nome do segundo time: ");
     let gols1 = parseInt(prompt("Digite o numero de gols do primeiro time: "));
     let gols2 = parseInt(prompt("Digite o numero de gols do segundo time:"));
     if ( gols1 > gols2 ){
     alert("Vencedor: "+ time1)
     } else if( gols2 > gols1 ) {
        alert("Vencedor: "+time2)
     }else{
        alert("Empate");
     }
}