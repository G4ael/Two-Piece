let des =document.getElementById('des').getContext('2d')

let player = new Player(100,500,50,50,'red') //mudar o x,y,h,h,w,a
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

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        player.dir -= 10
    }else if(e.key === 'd'){
        player.dir += 10
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        player.dir = 0
    }else if(e.key === 'd'){
        player.dir = 0
    }
})

let grupoTiros = [] 
let tiro = {
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

let grupoinimigo = []
let inimigo = {
    time1: 0, 
    time2: 0,
    time3: 0,

    criaInimigo(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2) //arrumar a aleatoriedade
        let pos_x2 = (Math.random() * (438 - 2 +1)+2) //arrumar a aleatoriedade
        let pos_x3 = (Math.random() * (438 - 2 +1)+2) //arrumar a aleatoriedade
        if(this.time1 >=60){
            this.time1 = 0
            grupoinimigo.push(new Inimigo(pos_x,-200,50,50,'red'))//colocar a imagem do inimigo
            console.log(grupoinimigo)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoinimigo.push(new Inimigo(pos_x2,-300,50,50,'red'))//colocar a imagem do inimigo
            console.log(grupoinimigo)
        }
        if(this.time3 >=135){
            this.time3 = 0
            grupoinimigo.push(new Inimigo(pos_x3,-400,50,50,'red'))//colocar a imagem do inimigo
            console.log(grupoinimigo)
        }
    },
    des(){
        grupoinimigo.forEach((inimigo)=>{
            inimigo.des_obj()
        })
    },
    destroiInimigo(){
        grupoTiros.forEach((tiro)=>{
            grupoDiscos.forEach((inimigo)=>{
                if(tiro.colid(inimigo)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoDiscos.splice(grupoDiscos.indexOf(inimigo), 1)
                    nav1.pts +=1
                }
            })
        })
    },
    atual(){
        this.criaInimigo()
        this.destroiInimigo()
        grupoDiscos.forEach((inimigo)=>{
            inimigo.mov()
            if(inimigo.y >= 710){
                grupoinimigo.splice(grupoinimigo.indexOf(inimigo),1)
            }
        })
    }
}

function game_over(){
    if(player.vida <= 0){
        jogar = false
        //parar todos os sons
        //tocar musica End Game
    }
}
document.addEventListener('keypress', (ev)=>{
    if (ev.key === 'l') { //escolher como o tiro vai sair
        grupoTiros.push(new Tiro(player.x - 4 + player.w / 2, player.y, 8, 16, 'yellow'))
    }
    //colocar som?
})

function colisao(){
    tirosinimigos.forEach((tiro_inimigo)=>{
        if(tiro_inimigo.colid(tiro_inimigo)){
            tirosinimigos.splice(tirosinimigos.indexOf(tiro_inimigo), 1)
            player.vida -=1
        }
    })
}


function desenha(){
    player.des_obj()
}

function atualiza(){
    player.mov()
}

function main(){
    des.clearRect(0,0,950,630)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()