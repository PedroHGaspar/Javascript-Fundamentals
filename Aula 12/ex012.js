var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log("Estamos no período da manhã!")
}else if(hora <= 18){
    console.log('Estamos no período da Tarde')
}else if(hora > 19){
    console.log('Estamos no período da Noite')
}else{
    console.log('Estamos no período da Madrugada')
}
