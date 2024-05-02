function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if (fano.value.lenght == 0 || fano.value > ano){ 
        alert('Verifique os dados e tente novamente')
   }else{
        var fsex = document.getElementsByName('radsex') //pegando o resultado do input radio pela posição 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') 
        // criando dinamicamente para colocar uma img 
        img.setAttribute('id','foto') // colocando um id para foto 

        if (fsex[0].checked){ //vendo se a posição digitado no imput raio é a 0 (masculina)
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/bebeHomem.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovemHomem.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src','imagens/homemAdulto.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/idosoHomem.png')
            }
        }else if (fsex[1].checked){ //vendp se a posição digitado no imput e a 1 (feminina)
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/bebeMulher.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovemMulher.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src','imagens/mulherAdulta.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/idosaMulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img) // coloca a imagem em baixo adiociona o elemento 
   }
}