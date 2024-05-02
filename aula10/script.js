var tn1 = document.getElementById('txtn1')
var tn2 = document.getElementById('txtn2')

function somar() {

    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2

    res.innerHTML = ` ${n1} + ${n2} =  ${s}`
    res.style.color = 'red'
}
function subtrair() {

    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2

    res.style.color = 'red'
    res.innerHTML = ` ${n1} - ${n2}  = ${s}`

}

function dividir() {
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2

    res.style.color = 'red'
    res.innerHTML = ` ${n1} / ${n2}  = ${s}`
}

function multiplicar() {
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2

    res.style.color = 'red'
    res.innerHTML = ` ${n1} x ${n2}  = ${s}`
}