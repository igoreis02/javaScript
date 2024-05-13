var km = document.getElementById("km")
var litro = document.getElementById("litro")
var valcool = document.getElementById("valcool")
var vgasolina = document.getElementById("vgasolina")
var res = document.getElementById("res")

function isNumber(n){
    if (Number(n) > 0){
        return true
    }else{
        return false
    }
}

function comparacao(){
    res.innerHTML = ''
    if(isNumber(km.value) && isNumber(litro.value)){
    if(km.value > 0 && litro.value > 0 && valcool.value > 0 && vgasolina.value > 0){
            res.innerHTML += '<hr>'
            res.innerHTML += `O consumo médio do seu veículo é de ${(km.value/litro.value).toFixed(2)} km/L. <br>`
            res.innerHTML += `A relação entre o preço do litro do Álcool e da Gasolina é de ${(valcool.value/vgasolina.value).toFixed(2)}<br>`
            if(((vgasolina.value-valcool.value)/vgasolina.value)*100 > 0.7){
                res.innerHTML += `Considerando a relação de preços, é mais vantajoso abastecer com Gasolina.<br>`
            }else{
                res.innerHTML += `Considerando a relação de preços, é mais vantajoso abastecer com Álcool.`
            }
    }else{
            alert('Valores negativos ou zerados')
        }
    }else{
        alert('Erro: verifique os dados')
    }
    km.value = ''
    litro.value = ''
    valcool.value = ''
    vgasolina.value =' '


}