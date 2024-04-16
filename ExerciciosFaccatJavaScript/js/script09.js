/*Exercicio 35 FACCAT 
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.*/

function exercicio09() {
    let precoLitroGasolina = 3.30;
    let precoLitroAlcool = 2.90;
    let desconto, valorTotal;
    let litros = parseInt(prompt("Digite o número de litros vendidos: "));
    let tipoCombustivel = prompt("Digite o tipo de combustível A-álcool, G-gasolina: ");

    if (tipoCombustivel === "A") {
        if (litros <= 20) {
            desconto = 0.03;
        } else {
            desconto = 0.05;
        }
        valorTotal = litros * (precoLitroAlcool - (precoLitroAlcool * desconto));

        
        alert("Valor a ser pago pelo cliente: R$ " + valorTotal.toFixed(2));
    } else if (tipoCombustivel === "G") {
        if (litros <= 20) {
            desconto = 0.04;
        } else {
            desconto = 0.06;
        }
        valorTotal = litros * (precoLitroGasolina - (precoLitroGasolina * desconto));

        
        alert("Valor a ser pago pelo cliente: R$ " + valorTotal.toFixed(2));
    }
}