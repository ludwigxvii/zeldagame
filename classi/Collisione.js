class Collisione {
    constructor({ position,position2}){
        this.position=position
        this.position2=position2
    }
     draw(){
        
        c.fillStyle = 'rgba(255, 0, 0, 0.29)'
    c.fillRect(this.position.x,this.position.y,(this.position2.x-this.position.x),(this.position2.y-this.position.y))
     }
   
    }