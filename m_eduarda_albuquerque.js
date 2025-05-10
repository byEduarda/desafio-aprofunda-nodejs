//1️⃣Imprimindo Números Pares

function ImprimePares(n){
    for(let i = 0; i <= n; i++){   //usa o indice 'i' para percorrer os numeros ate 'n'
        if(i % 2 === 0) console.log(i)  //testa quais numeros sao pares e imprime quando o resultado for true
    }
}
console.log("Resultado do exercício número um:")
ImprimePares(10) 



//2️⃣Soma dos Números de um Array

function somaArray(array){
    return array.reduce((acumulador, n) => acumulador + n, 0); //soma de forma automatica atraves do reduce
}
console.log("\nResultado do exercicío número dois:")
console.log(somaArray([1, 2, 5, 10]))



//3️⃣identificar Número Primo

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



//4️⃣FizzBuzz

function FizzBuzz(nms){
    for(let i = 0; i <= 50; i++){
        if(i % 3 === 0 && i % 5 === 0) {console.log("fizzBuzz");
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



//5️⃣Contador de Vogais

function contaVogais(texto){
    const vogais = 'aeiouáéíóúàèìòùâêîôûãõAEIOUÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕ';
    let contador = 0;

    for(let i = 0; i < texto.legth; i++){
        if(vogais.includes(texto[i])){
            contador++;
        }
    }
    return contador;
}
