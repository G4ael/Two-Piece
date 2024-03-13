let des =document.getElementById('des').getContext('2d')

let cajado = new Armas (300,150,90,90,'./assets/cajado1.png')

function desenha(){
    cajado.des_img()
}

function main(){
    desenha()
}

setInterval(main,10)