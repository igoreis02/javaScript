let valores = []
let num = document.getElementById('txtnum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')

//verifica de é um numero é se pe maior que 1 e menor 100 
function isNumero(n){
    if (Number(n) >=1  && Number(n) <= 100 ){
        return true
    }else{
        return false
    }
}

// verifica se ja existe um numero repetido dentro da lista se for -1 nao tem dentro da lista esse numero ( se o indeOf(a posicão )numero for diferente de -1 )
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''
    }else{
        alert('Valor invalido ou Já encontrado')
    }
    num.value = '' //apaga o numero que foi colocado
    num.focus() //fazer o cursor piscar 
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0

        for(let pos in valores){
            soma = soma + valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma é ${media}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}




