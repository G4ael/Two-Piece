class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)
    }

}

class Armas extends Obj{
    dir = 0
    mov(){
        this.x += this.dir
        if(this.x <= 0){
            this.x = 0
        }else if(this.x >= 820){
            this.x = 820
        }
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
        }else if(this.x >= 820){
            this.x = 820
        }
    }
    
}
class Tiro extends Obj{
    des_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
    
        mov(){
            this.y -= 10
        }
    }

    class Text{
        
    des_text(text,x,y,cor,font){
    des.fillStyle = cor
    des.lineWidth = '5'
    des.font = font
    des.fillText(text, x, y)
        }
    }

    class botao extends Obj{

    }
