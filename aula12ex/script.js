function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src ='imagens/noite1.png'
        document.body.style.background = '#515154'
    }
}
