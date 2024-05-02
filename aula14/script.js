function Taboada(){
    let num = document.getElementById('txtnum')
    var res = document.getElementById('res')
    
    if (num.value.length == 0 ){
        alert('ERRO : falta dados')
    }else{
        let n = Number(num.value)
        res.innerHTML = '' // limpa o select para inicar com nada 
        for(let c = 1;c <= 10; c++){
            let iten  = document.createElement('option') // cria um elemento 
            iten.text = `${n} x ${c} = ${n*c}` // coloca os valore dentro do elemnto option criado no select do html
            res.appendChild(iten)
            //adiciona os valores
        }
    }

    
}