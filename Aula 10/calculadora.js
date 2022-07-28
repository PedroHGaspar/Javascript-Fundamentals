function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}
function multi(){
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.querySelector('input#txtn4')
    var res1 = window.document.getElementById('res1')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var s1 = n3 * n4
    res1.innerHTML = `A multiplicação entre ${n3} e ${n4} é igual a <strong>${s1}</strong>`
}
function dividir(){
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.querySelector('input#txtn6')
    var res2 = window.document.getElementById('res2')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var s2 = n5 / n6
    res2.innerHTML = `A divisão entre ${n5} e ${n6} é igual a <strong>${s2}</strong>`
}
function subtrair(){
    var tn7 = window.document.getElementById('txtn7')
    var tn8 = window.document.querySelector('input#txtn8')
    var res2 = window.document.getElementById('res3')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var s3 = n7 - n8
    res3.innerHTML = `A subtração entre ${n7} e ${n8} é igual a <strong>${s3}</strong>`
}
function aoquadrado(){
    var tn9 = window.document.getElementById('txtn9')
    var n9 = Number(tn9.value)
    var s4 = n9 * n9
    res4.innerHTML = `A operação ao quadrado de ${n9} é igual a <strong>${s4}</strong>`
}