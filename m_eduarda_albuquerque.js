//1️⃣Imprimindo Números Pares

function ImprimePares(n){
    for(let i = 0; i <= n; i++){   //usa o indice 'i' para percorrer os numeros ate 'n'
        if(i % 2 === 0) console.log(i)  //testa quais numeros sao pares e imprime quando o resultado for true
    }
}
console.log("Resultado do exercício número um:")
ImprimePares(10) 



//2️⃣Soma dos Números de um Array

function somaArray(arr){
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log("\nResultado do exercicío número dois:")
console.log(somaArray([1, 2, 5, 1]))