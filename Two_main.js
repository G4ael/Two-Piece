let des =document.getElementById('des').getContext('2d')

let player = new Player(100,500,50,50,'red') //mudar o x,y,h,h,w,a
//let inimigo = new Inimigo(500,-100,50,50,'yellow') //mudar o x,y,h,h,w,a
//let inimigo2 = new Inimigo(300,-80,50,50,'yellow') //mudar o x,y,h,h,w,a
//let inimigo3 = new Inimigo(700,-150,50,50,'yellow') //mudar o x,y,h,h,w,a
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

let grupoInimigo = []
let inimigo = {
    time1: 0, 
    time2: 0,
    time3: 0,

    criaInimigo(){
        this.time1 += 0.2
        this.time2 += 0.2
        this.time3 += 0.2
        let pos_x = (Math.random() * (900 - 2 +1)+2)
        let pos_x2 = (Math.random() * (900 - 2 +1)+2)
        let pos_x3 = (Math.random() * (900 - 2 +1)+2)
        if(this.time1 >=60){
            this.time1 = 0
            grupoInimigo.push(new Inimigo(pos_x,-200,50,50,'yellow'))
            console.log(grupoInimigo)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoInimigo.push(new Inimigo(pos_x2,-300,50,50,'yellow'))
            console.log(grupoInimigo)
        }
        if(this.time3 >=135){
            this.time3 = 0
            grupoInimigo.push(new Inimigo(pos_x3,-400,50,50,'yellow'))
            console.log(grupoInimigo)
        }
    },
    des(){
        grupoInimigo.forEach((inimigo)=>{
            inimigo.des_obj()
        })
    },
    destroiInimigo(){
        grupoTiros.forEach((tiro)=>{
            grupoInimigo.forEach((inimigo)=>{
                if(tiro.colid(inimigo)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoInimigo.splice(grupoInimigo.indexOf(inimigo), 1)
                    player.pts += 1
                }
            })
        })
    },
    atual(){
        this.criaInimigo()
        this.destroiInimigo()
        grupoInimigo.forEach((inimigo)=>{
            inimigo.mov()
        })
    }
}

//tiro
document.addEventListener('keypress', (ev)=>{
    if (ev.key === 'l') { //tecla para atirar
        grupoTiros.push(new Tiro(player.x - 15 + player.w / 4, player.y, 30, 40, './assets/tiro.png')) 
        // da onde o tiro vai sair
    }
})

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



function desenha(){
    text1.des_text('Pontos: ',760, 20, 'White', '26px Times')
    text2.des_text('Vida: ',30, 20, 'White', '26px Times')
    text3.des_text(player.pts, 850, 21, 'White', '26px Times')
    text4.des_text(player.vida,100, 21, 'White', '26px Times')

    player.des_obj()
    inimigo.des()
    //inimigo2.des_obj()
    //inimigo3.des_obj()
    tiros.des()
}

function atualiza(){
    player.mov()
    inimigo.atual()
    //inimigo2.atual_inimigo()
    //inimigo3.atual_inimigo()
    tiros.atual()
}

function main(){
    des.clearRect(0,0,950,630)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()