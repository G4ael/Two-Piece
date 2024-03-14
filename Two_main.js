let des =document.getElementById('des').getContext('2d')

let player = new Player(100,500,50,50,'red') 
let cajado = new Armas (player.x-40, player.y-60, 80, 80,'./assets/cajado1.png')
let text_pontos = new Text(100,100,50,50,'red') 
let text_life = new Text(100,100,50,50,'red') 
let text_armas = new Text(100,100,50,50,'red')
let linha = new Obj(880, 2, 10,640, 'white')
let quadrado = new Obj(1050, 400, 100,100, 'white')
let quadrado2 = new Obj(1060, 410, 80,80, 'black')
let tiro = new Tiro()


document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        player.dir -= 5
    }else if(e.key === 'd'){
        player.dir += 5
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        player.dir = 0
    }else if(e.key === 'd'){
        player.dir = 0
    }
})

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        cajado.dir -= 5
    }else if(e.key === 'd'){
        cajado.dir += 5
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        cajado.dir = 0
    }else if(e.key === 'd'){
        cajado.dir = 0
    }
})


function desenha(){
    player.des_obj()
    cajado.des_img()
    text_life.des_text('Vida: ',920, 50, 'White', '26px Times')
    text_pontos.des_text('Pontos: ',920, 180, 'White', '26px Times')
    text_armas.des_text('Armas', 1060, 380, 'white','26px Times')
    linha.des_obj()
    quadrado.des_obj()
    quadrado2.des_obj()
    
}

function atualiza(){
    player.mov()
    cajado.mov()
}


function main(){
    des.clearRect(0,0,950,630)
    desenha()
    atualiza()
}

main()