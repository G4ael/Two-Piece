class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)
    }
}

class Player extends Obj{
    dir = 0
    pts = 0
    vida = 5

    mov(){
        this.x += this.dir
        if(this.x <= 0){
            this.x = 0
        }else if(this.x >= 900){
            this.x = 900
        }
    }
    
}

class Inimigo extends Obj{
    pararY = 180  // posição onde o inimigo vai parar

    atual_inimigo(){
        if(this.y <= this.pararY){
            this.y += 0.5
        }
    }
}

class Tiro extends Obj{
des_tiro(){
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    mov(){
        this.y -= 10
    }
}

class Arma extends Obj{
}

class Text{
    //arrumar o text depois
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}
