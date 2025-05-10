//1️⃣Imprimindo Números Pares

function ImprimePares(n){
    for(let i = 0; i <= n; i++){   //usa o indice 'i' para percorrer os numeros ate 'n'
        if(i % 2 === 0) console.log(i)  //testa quais numeros sao pares e imprime quando o resultado for true
    }
}

ImprimePares(10) 


