//1️⃣ Imprimindo Números Pares

function ImprimePares(n){
    for(let i = 0; i <= n; i++){   //usa o indice 'i' para percorrer os numeros ate 'n'
        if(i % 2 === 0) console.log(i)  //testa quais numeros sao pares e imprime quando o resultado for true
    }
}
console.log("Resultado do exercício número um:")
ImprimePares(10) 



//2️⃣ Soma dos Números de um Array

function somaArray(array){
    return array.reduce((acumulador, n) => acumulador + n, 0); //soma de forma automatica atraves do reduce
}
console.log("\nResultado do exercicío número dois:")
console.log(somaArray([1, 2, 5, 10]))



//3️⃣ identificar Número Primo

function ePrimo(n){
    if(n < 2) return false; //retorna falso se o numero for menor que 2 pois nao existe numero primo menor que 2
     for(let i = 0; i <= Math.sqrt(n); i++){ //verifica se o 'n' tem um divisor alem da raiz 
        if(n % 2 === 0) return false;
    }
    return true;
}
console.log("\nResultado do exercício número três:")
console.log(ePrimo(7));
console.log(ePrimo(10));



//4️⃣ FizzBuzz

function FizzBuzz(nms){
    for(let i = 0; i <= 50; i++){
        if(i % 3 === 0 && i % 5 === 0) {console.log("fizzBuzz"); //nos tres casos verifica se o numero é divisivel e printa o nome escolhido
            }else if(i % 3 === 0){
                console.log("fizz");
            }else if(i % 5 === 0){
                console.log("buzz");
            }else{
                console.log(i);
            }
    }
}
console.log("\nResultado do exercicío quatro:")
FizzBuzz()



//5️⃣ Contador de Vogais

function contaVogais(texto){
    const vogais = 'aeiouáéíóúàèìòùâêîôûãõAEIOUÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕ'; //define por padrao as vogais
    let contador = 0; //conta as vogais encontradas

    for(let i = 0; i < texto.length; i++){
        if(vogais.includes(texto[i])){ //olha a letra na posicao 'i' e verfica se ela esta incluida na cosnt vogais
            contador++;
        }
    }
    return contador;
}
console.log("\nResultado do exercicío cinco:");
console.log(contaVogais("Node.js é incrível")); 



//6️⃣ Tabuada de um Número

function tabuada(n){
    for(let i = 1; i <= 10; i++){
        console.log("5 x " + i + " = " + n * [i]);
    }
}
console.log("\nResultado do exercicío seis:")
tabuada(5)



//7️⃣ Inverter String

function inverterString(texto){
    return texto.split("").reverse().join(""); //divide a string em caracteres, inverte e junta novamente.
}
console.log("\nResultado do exercicío número sete:");
console.log(inverterString("hello"));



//8️⃣ Encontre o Maior Número

function maiorNumero(array){
    return Math.max(...array); //usa o operador spread para passar os elementos do array para `Math.max`.
}
console.log("\nResultado do exercicío número oito:");
console.log(maiorNumero([3, 10, 6, 2]));



//9️⃣ Palíndromo

function ePalindromo(texto){
    const uniforme = texto.toLowerCase().replace(/[^a-z0-9]/g, ""); //remove espaços e caracteres não alfanuméricos.
    return uniforme === uniforme.split("").reverse().join("")  //compara a string original formatada com sua versão invertida.
}
console.log("\nExercicío número nove:")
console.log(ePalindromo("Ame a ema"));
console.log(ePalindromo("Olá mundo"));



// 🔟 Média de Notas

function calcularMedia(notas){
    const media = somaArray(notas) / notas.length;  //recebe e soma e a media do array
    if(media >= 7){
        console.log("Aprovado - Média: " + media); 
    }
    else{
        console.log("Reprovado - Média: " + media)
    }
    return media;
}
console.log("\nExercicío número dez:")
console.log(calcularMedia([8, 7, 6]));
console.log(calcularMedia([5, 6, 4]));