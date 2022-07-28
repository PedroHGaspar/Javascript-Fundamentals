function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.innerHTML = img.src="manha.png"
        document.body.style.background = '#c39435'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.innerHTML = img.src="tarde.png"
        document.body.style.background = '7c3b11'
    } else{
        //Boa noite
        img.innerHTML = img.src="noite.png"
        document.body.style.background = 'black'
    }
}