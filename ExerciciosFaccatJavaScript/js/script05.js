/* Exercicio 31 FACCAT
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados. */
function exercicio05(){
    let valorA = parseInt(prompt("Digite a media de um lado: "));
    let valorB = parseInt(prompt("Digite a media de um lado:"));
    let valorC = parseInt(prompt("Digite a media de um lado:"));
    if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB){
        alert("Forma um triângulo!");
    } else {
        alert("Não Forma um triângulo!")
    }
    
}

        
    
