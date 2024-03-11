class Armas extends Obj(){
    
    des_arma(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}
    
    class Tiro extends Obj(){
        
        colid(objeto){
            if((this.x < objeto.x + objeto.w)&&
            (this.x+this.w > objeto.x )&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
                return true}
                else{
                    false
                }
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
