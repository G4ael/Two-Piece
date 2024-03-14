let des =document.getElementById('des').getContext('2d')

let player = new Player(100,500,50,50,'red') //mudar o x,y,h,h,w,a
let inimigo = new Inimigo(500,-100,50,50,'yellow') //mudar o x,y,h,h,w,a
let text1 = new Text(100,100,50,50,'red') //mudar o x,y,h,h,w,a
let text2 = new Text(100,100,50,50,'red') //mudar o x,y,h,h,w,a
let text3 = new Text(100,100,50,50,'red') //mudar o x,y,h,h,w,a
let text4 = new Text(100,100,50,50,'red') //mudar o x,y,h,h,w,a
//mudar o nome das variaveis ex: text_life
const sondtrack_1 = new Audio('')
const sondtrack_2 = new Audio('')
const sondtrack_3 = new Audio('')
const sondtrack_4 = new Audio('')
const sondtrack_5 = new Audio('')

let jogar = true

let grupoTiros = [] 
let tiros = {
    des(){
        grupoTiros.forEach((tiro)=>{
            tiro.des_tiro()
        })
    },
    atual(){
        grupoTiros.forEach((tiro)=>{
            tiro.mov()
            if(tiro.y <= -10){
                grupoTiros.splice(tiro[0],1)
            }
        })
    }
}

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

//tiro
document.addEventListener('keypress', (ev)=>{
    if (ev.key === 'l') {
        grupoTiros.push(new Tiro(player.x - 4 + player.w / 2, player.y, 8, 16, 'assets/tiro.png'))
    }
})


function desenha(){
    text1.des_text('Pontos: ',760, 20, 'White', '26px Times')
    text2.des_text('Vida: ',30, 20, 'White', '26px Times')
    text3.des_text(player.pts, 850, 21, 'White', '26px Times')
    text4.des_text(player.vida,100, 21, 'White', '26px Times')

    player.des_obj()
    inimigo.des_obj()
    tiros.des()
}

function atualiza(){
    player.mov()
    inimigo.atual_inimigo()
    tiros.atual()
}

function main(){
    des.clearRect(0,0,950,630)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()