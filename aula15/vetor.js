let num = [5,8,2,3]

num.push(7) //adiciona na ultima posição 
num.length  //tamanho 
num.sort()  //coloca em ordem crescente 
console.log(num)

for(let c = 0; c < num.length; c++){
    console.log(num[c])
}

for (let pos in num){ //para cada posição dentro da variavel vetor 
    console.log(`posição ${pos} valor ${num[pos]}`)
}

//Buscar valores dentro do vetor 

let pos = num.indexOf(7) // procura onde esta o valor 7 e retorna o indice de onde esta o numero 7  se nao estiver o numero ele retorna -1 que nao existe o numero

console.log(`O valor 7 esta na posição ${pos}`)