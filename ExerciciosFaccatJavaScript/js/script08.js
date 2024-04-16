/* Exercicio 34 FACCAT
Faça um teste de mesa e complete o quadro a seguir para os seguintes valores*/
function exercicio08(){
    let valorX = parseInt(prompt("Digite o valor de X: "));
    let valorY = parseInt(prompt("Digite o valor de Y: "));
    let valorZ = ( valorX * valorY )+5
    let resposta, A, B, C;
    if ( valorZ <= 0){
        resposta = "A";
    }else if( valorZ <= 100 ){
        resposta = "B";
    }else {
        resposta = "C";
    }
    alert("O valor é: "+valorZ+" resposta: "+resposta)
} 